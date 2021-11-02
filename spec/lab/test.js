async function main() {
	Promise.resolve=(v)=>{
		return {
			then: (r)=>{
				r(123);
			}
		};
	}
	console.log(Promise.resolve);
	async function f() {
		return Promise.resolve(456);
	}

/*	function f() {
		return {
			then: (r)=>{
				r(123);
			}
		}
	}*/

	f().then(()=>{
		console.log("resolved");
	});

	console.log("after");
}

main();