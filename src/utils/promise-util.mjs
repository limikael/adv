export function delay(ms) {
	return new Promise((resolve, reject)=>{
		setTimeout(resolve,ms);
	});
}

export function isPromise(p) {
	if (p.then)
		return true;
}

export function promisify(p) {
	if (isPromise(p))
		return p;

	return {
		then: (f)=>f(p)
	}
}