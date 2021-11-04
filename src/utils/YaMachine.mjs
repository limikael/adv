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

	isAsync() {
		return this.async;
	}

	setAsync(async) {
		this.async=async;
	}
}

export default class YaMachine {
	constructor() {
		this.special={
			if: this.if.bind(this),
			and: this.and.bind(this),
			or: this.or.bind(this),
			return: this.return.bind(this),
			obj: this.obj.bind(this)
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

	maybeAsync(isAsync, fn) {
		let ret={};
		let fnRet=fn(ret);

		if (isAsync) {
			return new Promise((resolve,reject)=>{
				fnRet.then(()=>{
					if (ret.error)
						reject(ret.error)

					else
						resolve(ret.value);
				})
			});
		}

		if (ret.error)
			throw ret.error;

		return ret.value;
	}

	addFunction(name, fn) {
		this.functions[name]=fn;
	}

	and(clause, context) {
		return this.maybeAsync(context.isAsync(),async(ret)=>{
			try {
				this.assertValidKeys(clause,["and"]);

				if (!(clause.and instanceof Array))
					throw new Error("and needs an array");

				ret.value=true;
				for (let argPart of clause.and) {
					if (ret.value) {
						let v=this.evalWithContext(argPart,context);
						if (context.isAsync())
							v=await v;

						ret.value=(ret.value && this.castToBool(v));
					}
				}
			}

			catch (e) { ret.error=e; }
		});
	}

	or(clause, context) {
		return this.maybeAsync(context.isAsync(),async(ret)=>{
			try {
				this.assertValidKeys(clause,["or"]);

				if (!(clause.or instanceof Array))
					throw new Error("or needs an array");

				ret.value=false;
				for (let argPart of clause.or) {
					if (!ret.value) {
						let v=this.evalWithContext(argPart,context);
						if (context.isAsync())
							v=await v;

						ret.value=(ret.value || this.castToBool(v));
					}
				}
			}

			catch (e) { ret.error=e; }
		});
	}

	if(clause, context) {
		return this.maybeAsync(context.isAsync(),async(ret)=>{
			try {
				this.assertValidKeys(clause,["if","then","else"]);
				let ifRes=this.evalWithContext(clause.if,context);
				if (context.isAsync())
					ifRes=await ifRes;

				ifRes=this.castToBool(ifRes);
				if (ifRes && clause.then)
					ret.value=this.evalWithContext(clause.then,context);

				if (!ifRes && clause.else)
					ret.value=this.evalWithContext(clause.else,context);
			}

			catch (e) { ret.error=e; }
		});
	}

	return(clause, context) {
		return this.maybeAsync(context.isAsync(),async(ret)=>{
			try {
				this.assertValidKeys(clause,["return"]);

				if (context.isReturned())
					ret.value=context.getReturnValue();

				let v=this.evalWithContext(clause.return,context);
				if (context.isAsync())
					v=await v;

				context.setReturnValue(v);
				ret.value=context.getReturnValue();
			}

			catch (e) { ret.error=e; }
		});
	}

	obj(clause, context) {
		return this.maybeAsync(context.isAsync(),async(ret)=>{
			try {
				this.assertValidKeys(clause,["obj"]);

				if (clause.obj instanceof Array)
					ret.value=[];

				else if ((typeof clause.obj)=="object")
					ret.value={};

				else
					throw new Error("obj needs an object array");

				for (let c in clause.obj) {
					let v=this.evalWithContext(clause.obj[c],context);
					if (context.isAsync())
						v=await v;

					ret.value[c]=v;
				}
			}

			catch (e) { ret.error=e; }
		});
	}

	evalWithContext(clause, context) {
		return this.maybeAsync(context.isAsync(),async(ret)=>{
			try {
				if (context.isReturned())
					ret.value=context.getReturnValue();

				else if (typeof clause=="string" ||
						typeof clause=="boolean" ||
						typeof clause=="number" ||
						typeof clause=="undefined")
					ret.value=clause;

				else if (clause instanceof Array) {
					for (let subClause of clause) {
						if (!context.isReturned()) {
							ret.value=this.evalWithContext(subClause,context);
							if (context.isAsync())
								ret.value=await ret.value;
						}
					}

					if (context.isReturned())
						ret.value=context.getReturnValue();
				}

				else if (typeof clause=="object") {
					let fn=Object.keys(clause)[0];

					if (this.special[fn]) {
						ret.value=this.special[fn](clause,context);
						if (context.isAsync())
							ret.value=await ret.value;

						if (context.isReturned())
							ret.value=context.getReturnValue();
					}

					else if (this.functions[fn]) {
						this.assertValidKeys(clause,[fn]);
						let argClause=clause[fn];
						let arg=this.evalWithContext(argClause,context);
						if (context.isAsync())
							arg=await arg;

						ret.value=this.functions[fn](arg);
						if (context.isAsync())
							ret.value=await ret.value;

						if (ret.value instanceof Promise)
							throw new Error("async not allowed");

						if (context.isReturned())
							ret.value=context.getReturnValue();
					}

					else
						throw new Error("Unknown form: "+JSON.stringify(clause));
				}

				else
					throw new Error("Unknown form: "+JSON.stringify(clause));
			}

			catch (e) { ret.error=e; }
		});
	}

	evalSync(clause) {
		let context=new YaMachineContext();
		context.setAsync(false);

		return this.evalWithContext(clause,context);
	}

	evalAsync(clause) {
		let context=new YaMachineContext();
		context.setAsync(true);

		return this.evalWithContext(clause,context);
	}
}