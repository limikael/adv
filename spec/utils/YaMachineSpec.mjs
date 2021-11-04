import YaMachine from "../../src/utils/YaMachine.mjs";
import yaml from "yaml";
import fs from "fs";
import {delay} from "../../src/utils/promise-util.mjs";

describe("YaMachine",()=>{
	it("basic",()=>{
		let y=new YaMachine();

		y.addFunction("hello",(s)=>s);
		let res=y.evalSync([
			{hello: 1},
			{hello: 2}
		]);

		expect(res).toEqual(2);
	});

	it("async basic",async ()=>{
		let y=new YaMachine();

		y.addFunction("hello",async (s)=>s);
		let res=await y.evalAsync([
			{hello: 1},
			{hello: 2}
		]);

		expect(res).toEqual(2);
	});

	it("works with if",async ()=>{
		let y=new YaMachine();

		y.addFunction("having",(s)=>{
			if (s=="thing" || s=="other")
				return true;
		});

		y.addFunction("havingasync",async (s)=>{
			if (s=="thing" || s=="other")
				return true;
		});

		let p={
			if: {having: "thing"},
			then: "hello",
			else: "world"
		};

		expect(y.evalSync(p)).toEqual("hello");
		expect(await y.evalAsync(p)).toEqual("hello");

		let pa={
			if: {havingasync: "thing"},
			then: "hello",
			else: "world"
		};

		expect(()=>{
			y.evalSync(pa);
		}).toThrow();

		expect(await y.evalAsync(pa)).toEqual("hello");

	});

	it("works",async ()=>{
		let y=new YaMachine();

		y.addFunction("having",(s)=>{
			if (s=="thing" || s=="other")
				return true;
		});

		y.addFunction("not",(s)=>!s);

		expect(y.evalSync("hello")).toEqual("hello");
		expect(y.evalSync(["hello","world"])).toEqual("world");

		let p=yaml.parse(`
          if-and:
          - not-having: thingg
          - having: other
          then: hello
          else: world
        `);

		p=y.preprocess(p);

		expect(y.evalSync(p)).toEqual("hello");
		expect(await y.evalAsync(p)).toEqual("hello");
	});

	it("can handle return",()=>{
		let y=new YaMachine();

		let calls=0;
		y.addFunction("hello",(s)=>{
			calls++;
			return s;
		});

		let p=yaml.parse(`
- if-hello: first
  then-return: 1
  else: 2
- hello: second
`)
//		console.log(y.preprocess(p));

		expect(y.evalSync(y.preprocess(p))).toEqual(1);
		expect(calls).toEqual(1);

		p=yaml.parse(`
return: 123
`)
//		console.log(y.preprocess(p));

		expect(y.evalSync(y.preprocess(p))).toEqual(123);
	});

	it("checked for invalid keys",()=>{
		let y=new YaMachine();

		y.addFunction("hello",(s)=>s);

		let p=yaml.parse(`
- hello: test
  then: 1
  else: 2
`)

		p=y.preprocess(p);

		expect(()=>{
			y.evalSync(p);
		}).toThrow();
	});

	it("can make arrays",()=>{
		let p=yaml.parse(`
- if-hello: test
  then-obj:
  - hello: a
  - b
  - c
`);

		let y=new YaMachine();
		y.addFunction("hello",(s)=>{
			return s;
		});

		p=y.preprocess(p);

		let a=y.evalSync(p);
		expect(a).toEqual(["a","b","c"]);
	});

	it("can make objects",()=>{
		let y=new YaMachine();
		y.addFunction("hello",(s)=>{
			return s;
		});

		let p=[
			{obj: {
				a: {hello: 123},
				b: "test",
				c: 123
			}}
		];

		let a=y.evalSync(p);
		expect(a).toEqual({
			a: 123,
			b: "test",
			c: 123
		});
	});

	it("can run async functions",async ()=>{
		let y=new YaMachine();
		let resolver;
		let calls=0;

		y.addFunction("hello",(s)=>{
			calls++;
			return new Promise((resolve, reject)=>{
				resolver=resolve;
			});
		});

		let p=[
			{hello: 1},
			{hello: 2}
		];

		let ret=y.evalAsync(p);
		await delay(0);
		expect(calls).toEqual(1);

		resolver(123);
		await delay(0);

		expect(calls).toEqual(2);
		resolver(123);

		expect(await ret).toEqual(123);
	});
})