export function delay(ms) {
	return new Promise((resolve, reject)=>{
		setTimeout(resolve,ms);
	});
}

export function createMethodPromise() {
	let resolve,reject;

	let p=new Promise((argResolve,argReject)=>{
		resolve=argResolve;
		reject=argReject;
	});

	p.resolve=resolve;
	p.reject=reject;

	return p;
}

export function maybeAsync(fn) {
	let resolved,resolvedVal;
	let rejected,rejectedVal;
	let promise;

	function resolve(v) {
		resolved=true;
		resolvedVal=v;
	}

	function reject(v) {
		rejected=true;
		rejectedVal=v;
	}

	promise=fn(resolve,reject);

	if (resolved)
		return resolvedVal;

	if (rejected)
		throw rejectedVal;

	return new Promise((resolve, reject)=>{
		promise.then(()=>{
			if (resolved)
				resolve(resolvedVal);

			if (rejected)
				reject(rejectedVal);

			else
				reject(Error("Function did not resolve or reject"));
		}).catch((e)=>{
			reject(e);
		});
	});
}

export function isPromise(p) {
	if (p instanceof Promise)
		return true;

	if (p instanceof Object && p.hasOwnProperty("then"))
		return true;

	return false;
}

export function waitForEvent(o, ev) {
	return new Promise((resolve,reject)=>{
		o.once(ev,resolve)
	});
}