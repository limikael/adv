import YaMachine from "../../src/utils/YaMachine.mjs";
import yaml from "yaml";
import fs from "fs";

describe("YaMachine",()=>{
	it("works",()=>{
		let y=new YaMachine();

		y.addFunction("having",(s)=>{
			if (s=="thing" || s=="other")
				return true;
		});

		y.addFunction("not",(s)=>!s);

		expect(y.eval("hello")).toEqual("hello");
		expect(y.eval(["hello","world"])).toEqual("world");

		let p=yaml.parse(`
          if-and:
          - not-having: thingg
          - having: other
          then: hello
          else: world
        `);

		expect(y.preprocessAndEval(p)).toEqual("hello");
//		let q=yaml.parse(`if-not-having: test`);

//		console.log(JSON.stringify(y.preprocess(p)));
//		console.log(JSON.stringify(y.preprocess([{"not-having": "test"}])));
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

		expect(y.preprocessAndEval(p)).toEqual(1);
		expect(calls).toEqual(1);

		p=yaml.parse(`
return: 123
`)
//		console.log(y.preprocess(p));

		expect(y.preprocessAndEval(p)).toEqual(123);
	});

	it("checked for invalid keys",()=>{
		let y=new YaMachine();

		y.addFunction("hello",(s)=>s);

		let p=yaml.parse(`
- hello: test
  then: 1
  else: 2
`)
		expect(()=>{
			y.preprocessAndEval(p);
		}).toThrow();
	});

	it("can make arrays",()=>{
		let p=yaml.parse(`
- if-hello: test
  then-seq:
  - hello: a
  - b
  - c
`);

		let y=new YaMachine();
		y.addFunction("hello",(s)=>{
			return s;
		});

		let a=y.preprocessAndEval(p);
		expect(a).toEqual(["a","b","c"]);
	});
})