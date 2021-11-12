import {maybeAsync,delay} from "../../src/utils/promise-util.js";

describe("promise util",()=>{
	it("can run things that maybe are async",async ()=>{
		let v=maybeAsync(async(resolve,reject)=>{
			resolve(123);
		});

		expect(v).toEqual(123);

		v=maybeAsync(async(resolve,reject)=>{
			await delay(0);
			resolve(123);
		});

		expect(v).toBeInstanceOf(Promise);
		expect(await v).toEqual(123);

		v=maybeAsync(async(resolve,reject)=>{
			await delay(0);
		});

		let caught;
		try {
			await v;
		}

		catch (e) {
			caught=true;
		}

		expect(caught).toEqual(true);
	});
})