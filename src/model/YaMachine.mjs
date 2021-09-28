export default class YaMachine {
	constructor() {
		this.functions={};
	}

	preprocess(clause) {
		if (typeof clause=="string" ||
				typeof clause=="boolean" ||
				typeof clause=="number")
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

		this.special={
			if: this.if.bind(this),
			and: this.and.bind(this),
			or: this.or.bind(this)
		}
	}

	and(clause) {
		if (!(clause.and instanceof Array))
			throw new Error("and needs an array");

		let res=true;
		for (let argPart of clause.and)
			res=(res && this.eval(argPart));

		return res;
	}

	or(clause) {
		if (!(clause.or instanceof Array))
			throw new Error("or needs an array");

		let res=false;
		for (let argPart of clause.or)
			res=(res || this.eval(argPart));

		return res;
	}

	if(clause) {
		let res=this.eval(clause.if);
		if (res && clause.then)
			return this.eval(clause.then);

		if (!res && clause.else)
			return this.eval(clause.else);

		return undefined;
	}

	eval(clause) {
		if (typeof clause=="string" ||
				typeof clause=="boolean" ||
				typeof clause=="number")
			return clause;

		if (clause instanceof Array) {
			let res;
			for (let subClause of clause)
				res=this.eval(subClause);

			return res;
		}

		if (typeof clause=="object") {
			let fn=Object.keys(clause)[0];

			if (this.special[fn])
				return this.special[fn](clause);

			if (this.functions[fn]) {
				let arg=clause[fn];
				return this.functions[fn](this.eval(arg));
			}
		}

		throw new Error("Unknown form: "+JSON.stringify(clause));
	}
}