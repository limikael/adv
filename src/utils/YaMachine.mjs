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
			seq: this.seq.bind(this)
		}

		this.functions={};
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
				typeof clause=="undefined")
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

	and(clause, context) {
		this.assertValidKeys(clause,["and"]);

		if (!(clause.and instanceof Array))
			throw new Error("and needs an array");

		let res=true;
		for (let argPart of clause.and)
			res=(res && this.castToBool(this.eval(argPart,context)));

		return res;
	}

	or(clause, context) {
		this.assertValidKeys(clause,["or"]);

		if (!(clause.or instanceof Array))
			throw new Error("or needs an array");

		let res=false;
		for (let argPart of clause.or)
			res=(res || this.castToBool(this.eval(argPart,context)));

		return res;
	}

	if(clause, context) {
		this.assertValidKeys(clause,["if","then","else"]);

		let res=this.castToBool(this.eval(clause.if,context));
		if (res && clause.then)
			return this.eval(clause.then,context);

		if (!res && clause.else)
			return this.eval(clause.else,context);

		return undefined;
	}

	return(clause, context) {
		this.assertValidKeys(clause,["return"]);

		if (context.isReturned())
			return context.getReturnValue();

		context.setReturnValue(this.eval(clause.return,context));
		return context.getReturnValue();
	}

	seq(clause, context) {
		this.assertValidKeys(clause,["seq"]);

		if (!(clause.seq instanceof Array))
			throw new Error("seq needs an array");

		let res=[];

		for (let c of clause.seq)
			res.push(this.eval(c,context))

		return res;
	}

	async evalAsync(clause, context) {
		/*if (clause instanceof Promise)
			clause=await clause;*/

		if (!context)
			context=new YaMachineContext();

		if (context.isReturned())
			return context.getReturnValue();

		if (typeof clause=="string" ||
				typeof clause=="boolean" ||
				typeof clause=="number" ||
				typeof clause=="undefined")
			return clause;

		if (clause instanceof Array) {
			let res;
			for (let subClause of clause)
				res=await this.evalAsync(subClause,context);

			if (context.isReturned())
				return context.getReturnValue();

			return res;
		}

		if (typeof clause=="object") {
			let fn=Object.keys(clause)[0];

			if (this.special[fn]) {
				let res=this.special[fn](clause,context);

				if (context.isReturned())
					return context.getReturnValue();

				return res;
			}

			if (this.functions[fn]) {
				this.assertValidKeys(clause,[fn]);
				let argClause=clause[fn];
				let arg=await this.evalAsync(argClause,context);
				let res=await this.functions[fn](arg);

				if (context.isReturned())
					return context.getReturnValue();

				return res;
			}
		}

		throw new Error("Unknown form: "+JSON.stringify(clause));
	}

	eval(clause, context) {
		let res,resolved;
		let p=this.evalAsync(clause);
		p.then((promised)=>{
			res=promised;
			resolved=true;
		});

		if (!resolved)
			throw new Error("Async can't be used here");

		return res;
	}

	/*preprocessAndEval(clause) {
		return this.eval(this.preprocess(clause));
	}*/
}