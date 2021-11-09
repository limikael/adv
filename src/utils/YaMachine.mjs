import {maybeAsync, isPromise} from "./promise-util.mjs";
import yaml from "yaml";

class YaMachineContext {
	isReturned() {
		return this.returned;
	}

	setReturnValue(v) {
		this.returned=true;
		this.returnValue=v;
	}

	getReturnValue(v) {
		return this.returnValue;
	}
}

class YaMachineError extends Error {
	constructor(message, range) {
		super(message);
		this.name="YaMachineError";
		this.range=range;
	}
}

export default class YaMachine {
	constructor() {
		this.special={
			if: this.if.bind(this),
			and: this.and.bind(this),
			or: this.or.bind(this),
			return: this.return.bind(this),
			obj: this.obj.bind(this),
			quote: this.quote.bind(this)
		}

		this.functions={};
		this.macros={};
		this.addFunction("not",(s)=>!this.castToBool(s));
	}

	castToBool(value) {
		return value;
	}

	assertValidKeys(o, validKeys) {
		let fn=Object.keys(o)[0];

		for (let key in o)
			if (!validKeys.includes(key) &&
					key!="__range" &&
					key!="__keyRanges")
				throw new Error("Unknown key "+key+" for call to "+fn);
	}

	preprocess(clause) {
		if (this.isPrimitive(clause))
			return clause;

		else if (clause instanceof Array) {
			let res=[];
			for (let subClause of clause)
				res.push(this.preprocess(subClause));

			return res;
		}

		else if (typeof clause=="object") {
			let res={};
			let keyRanges={};

			for (let k in clause) {
				if (k!="__range" && k!="__keyRanges") {
					let a=k.split("-");
					let o=this.preprocess(clause[k]);

					for (let i=a.length-1; i>=1; i--) {
						let newO={};
						newO[a[i]]=o;

						if (o) {
							newO.__range=clause.__range;

							if (clause.__keyRanges) {
								newO.__keyRanges={};
								newO.__keyRanges[a[i]]=clause.__keyRanges[k];
							}
						}

						o=newO;
					}

					res[a[0]]=o;

					if (clause.__keyRanges)
						keyRanges[a[0]]=clause.__keyRanges[k];
				}
			}

			res.__range=clause.__range;
			res.__keyRanges=keyRanges;

			return res;
		}

		else
			throw new Error("Unknown form: "+JSON.stringify(clause));
	}

	addFunction(name, fn) {
		this.functions[name]=fn;
	}

	addMacro(name, fn) {
		this.macros[name]=fn;
	}

	and(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				this.assertValidKeys(clause,["and"]);

				if (!(clause.and instanceof Array))
					throw new Error("and needs an array");

				let ret=true;
				for (let argPart of clause.and) {
					if (ret) {
						let v=this.evalWithContext(argPart,context);
						if (isPromise(v))
							v=await v;

						ret=(ret && this.castToBool(v));
					}
				}

				resolve(ret);
			}

			catch (e) { reject(e); }
		});
	}

	or(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				this.assertValidKeys(clause,["or"]);

				if (!(clause.or instanceof Array))
					throw new Error("or needs an array");

				let ret=false;
				for (let argPart of clause.or) {
					if (!ret) {
						let v=this.evalWithContext(argPart,context);
						if (isPromise(v))
							v=await v;

						ret=(ret || this.castToBool(v));
					}
				}

				resolve(ret);
			}

			catch (e) { reject(e); }
		});
	}

	if(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				this.assertValidKeys(clause,["if","then","else"]);
				let ifRes=this.evalWithContext(clause.if,context);
				if (isPromise(ifRes))
					ifRes=await ifRes;

				ifRes=this.castToBool(ifRes);
				if (ifRes && clause.then)
					return resolve(this.evalWithContext(clause.then,context));

				if (!ifRes && clause.else)
					return resolve(this.evalWithContext(clause.else,context));

				return resolve(undefined);
			}

			catch (e) { reject(e); }
		});
	}

	return(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				this.assertValidKeys(clause,["return"]);

				if (context.isReturned())
					return resolve(context.getReturnValue());

				let v=this.evalWithContext(clause.return,context);
				if (isPromise(v))
					v=await v;

				context.setReturnValue(v);
				resolve(context.getReturnValue());
			}

			catch (e) { reject(e); }
		});
	}

	obj(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				this.assertValidKeys(clause,["obj"]);

				if (this.isPrimitive(clause.obj)) {
					let v=this.evalWithContext(clause.obj,context);
					if (isPromise(v))
						v=await v;

					return resolve(v);
				}

				let ret;
				if (clause.obj instanceof Array)
					ret=[];

				else if ((typeof clause.obj)=="object")
					ret={};

				for (let c in clause.obj) {
					let v=this.evalWithContext(clause.obj[c],context);
					if (isPromise(v))
						v=await v;

					ret[c]=v;
				}

				resolve(ret);
			}

			catch (e) { reject(e); }
		});
	}

	quote(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				this.assertValidKeys(clause,["quote"]);
				return resolve(clause.quote);
			}

			catch (e) { reject(e); }
		});
	}

	isPrimitive(clause) {
		if (typeof clause=="string" ||
				typeof clause=="boolean" ||
				typeof clause=="number" ||
				typeof clause=="undefined" ||
				clause===null)
			return true;

		if (clause instanceof String)
			return true;

		return false;
	}

	evalWithContext(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				if (context.isReturned())
					return resolve(context.getReturnValue());

				else if (this.isPrimitive(clause))
					return resolve(clause);

				else if (clause instanceof Array) {
					let ret;

					for (let subClause of clause) {
						if (!context.isReturned()) {
							ret=this.evalWithContext(subClause,context);
							if (isPromise(ret))
								ret=await ret;
						}
					}

					if (context.isReturned())
						return resolve(context.getReturnValue());

					resolve(ret);
				}

				else if (typeof clause=="object") {
					let ret;
					let fn=Object.keys(clause)[0];

					if (this.special[fn]) {
						ret=this.special[fn](clause,context);
						if (isPromise(ret))
							ret=await ret;

						if (context.isReturned())
							ret=context.getReturnValue();
					}

					else if (this.macros[fn]) {
						let form=this.macros[fn](clause);

						ret=this.evalWithContext(form,context);
						if (isPromise(ret))
							ret=await ret;

						if (context.isReturned())
							ret=context.getReturnValue();
					}

					else if (this.functions[fn]) {
						this.assertValidKeys(clause,[fn]);
						let argClause=clause[fn];
						let arg=this.evalWithContext(argClause,context);
						if (isPromise(arg))
							arg=await arg;

						ret=this.functions[fn](arg);
						if (isPromise(ret))
							ret=await ret;

						if (context.isReturned())
							ret=context.getReturnValue();
					}

					else
						throw new YaMachineError(
							"Unknown function '"+fn+"'.",
							clause.__keyRanges[fn]
						);

					resolve(ret);
				}

				else
					throw new Error("Unknown form: "+JSON.stringify(clause));
			}

			catch (e) {
				reject(e);
			}
		});
	}

	evalSync(clause) {
		let context=new YaMachineContext();
		let v=this.evalWithContext(clause,context);

		if (isPromise(v))
			throw new Error("Async not allowed here");

		return v;
	}

	async evalAsync(clause) {
		let context=new YaMachineContext();

		return await this.evalWithContext(clause,context);
	}

	evalMaybeAsync(clause) {
		let context=new YaMachineContext();

		return this.evalWithContext(clause,context);
	}

	toAnnotatedJS(doc) {
		let ret;

		if (doc===null)
			return doc;

		switch (doc.constructor.name) {
			case "Document":
				return this.toAnnotatedJS(doc.contents);
				break;

			case "YAMLSeq":
				ret=[];

				for(let item of doc.items)
					ret.push(this.toAnnotatedJS(item));

				ret.__range=doc.range;
				return ret;
				break;

			case "YAMLMap":
				ret={};
				let keyRanges={};

				for(let item of doc.items) {
					if (item.constructor.name!="Pair")
						throw new Error("Expected pair");

					let k=this.toAnnotatedJS(item.key);
					let v=this.toAnnotatedJS(item.value);

					ret[k]=v;
					keyRanges[k]=k.__range;
				}

				ret.__range=doc.range;
				ret.__keyRanges=keyRanges;

				return ret;
				break;

			case "Scalar":
				ret=new String(doc.value);
				ret.__range=doc.range;
				return ret;
				break;

			default:
				throw new Error("Unknown YAML node type: "+doc.constructor.name);
				break;
		}
	}

	parse(s, options={}) {
		if (!options.hasOwnProperty("annotate"))
			options.annotate=true;

		if (!options.hasOwnProperty("preprocess"))
			options.preprocess=true;

		let o=yaml.parse(s);

		if (options.annotate) {
			let doc=yaml.parseDocument(s);
			o=this.toAnnotatedJS(doc);
		}

		if (options.preprocess)
			o=this.preprocess(o);

		return o;
	}
}