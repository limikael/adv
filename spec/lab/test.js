function myfunc() {
	let ret;

	try {
//		(async()=>{
			throw "hello";
//		})();
	}

	catch (e) {
		console.log("got e");
	}

	return ret;
}

async function main() {
	let v=myfunc();
	console.log("here..");
	console.log(v);
}

main();