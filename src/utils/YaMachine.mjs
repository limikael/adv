import {maybeAsync, isPromise} from "./promise-util.mjs";

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
			if (!validKeys.includes(key))
				throw new Error("Unknown key "+key+" for call to "+fn);
	}

	preprocess(clause) {
		if (typeof clause=="string" ||
				typeof clause=="boolean" ||
				typeof clause=="number" ||
				typeof clause=="undefined" ||
				clause===null)
			return clause;

		else if (clause instanceof Array) {
			let res=[];
			for (let subClause of clause)
				res.push(this.preprocess(subClause));

			return res;
		}

		else if (typeof clause=="object") {
			let res={};

			for (let k in clause) {
				let a=k.split("-");
				let o=this.preprocess(clause[k]);

				for (let i=a.length-1; i>=1; i--) {
					let newO={};
					newO[a[i]]=o;
					o=newO;
				}

				res[a[0]]=o;
			}

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

				let ret;
				if (clause.obj instanceof Array)
					ret=[];

				else if ((typeof clause.obj)=="object")
					ret={};

				else {
					let v=this.evalWithContext(clause.obj,context);
					if (isPromise(v))
						v=await v;

					return resolve(v);
				}

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
				return resolve(clause);
			}

			catch (e) { reject(e); }
		});
	}

	evalWithContext(clause, context) {
		return maybeAsync(async(resolve, reject)=>{
			try {
				if (context.isReturned())
					return resolve(context.getReturnValue());

				else if (typeof clause=="string" ||
						typeof clause=="boolean" ||
						typeof clause=="number" ||
						typeof clause=="undefined" ||
						clause===null)
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
						throw new Error("Unknown form: "+JSON.stringify(clause));

					resolve(ret);
				}

				else
					throw new Error("Unknown form: "+JSON.stringify(clause));
			}

			catch (e) { reject(e); }
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
}