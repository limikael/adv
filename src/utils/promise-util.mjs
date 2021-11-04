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