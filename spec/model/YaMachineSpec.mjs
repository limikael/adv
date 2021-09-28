import YaMachine from "../../src/model/YaMachine.mjs";
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

		expect(y.eval(y.preprocess(p))).toEqual("hello");
//		let q=yaml.parse(`if-not-having: test`);

//		console.log(JSON.stringify(y.preprocess(p)));
//		console.log(JSON.stringify(y.preprocess([{"not-having": "test"}])));
	})
})