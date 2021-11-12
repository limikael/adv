import YaMachine from "../../src/utils/YaMachine.mjs";
import yaml from "yaml";
import fs from "fs";
import {delay} from "../../src/utils/promise-util.js";
import {lineNumberByCharIndex} from "../../src/utils/string-util.mjs";
import util from "util";

describe("YaMachine",()=>{
	function reparse(o) {
		let y=new YaMachine();

		return y.parse(yaml.stringify(o))
	}

	it("basic",()=>{
		let y=new YaMachine();

		y.addFunction("hello",(s)=>s);
		let res=y.evalSync(reparse([
			{hello: 1},
			{hello: 2}
		]));

		expect(res).toEqual("2");
	});

	it("async basic",async ()=>{
		let y=new YaMachine();

		y.addFunction("hello",async (s)=>{
			await delay(0);
			return s;
		});
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

		let p=[{
			if: {having: "thing"},
			then: "hello",
			else: "world"
		}];

		expect(y.evalSync(reparse(p))).toEqual("hello");
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

	it("checks for invalid keys",()=>{
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
		let p=[{
			"if-hello": "test",
			"then-obj": [
				{hello: "a"},
				"b",
				"c"
			]
		}];

		//console.log(yaml.stringify(p));

		let y=new YaMachine();
		y.addFunction("hello",(s)=>{
			return s;
		});

		p=reparse(p);
		//y.preprocess(p);

		//console.log(p);

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
		//await delay(0);
		expect(calls).toEqual(1);

		resolver(123);
		await delay(0);

		expect(calls).toEqual(2);
		resolver(123);

		expect(await ret).toEqual(123);
	});

	it("has macros",async ()=>{
		let y=new YaMachine();
		let calls=0;

		y.addFunction("hello",(s)=>{
			calls++;
			return s;
		});

		y.addMacro("helloify",(o)=>{
			let res=[];

			for (p of o.helloify)
				res.push({hello: p})

			return res;
		});

		let p=[
			{helloify: [1,2,"bla"]},
		];

		expect(y.evalSync(p)).toEqual("bla");
		expect(calls).toEqual(3);
	});

	it("can quote",()=>{
		let y=new YaMachine();

		y.evalSync({quote: {if: "blupp", bla: [1,2,3]}})
	});

	it("works with or",async ()=>{
		let y=new YaMachine();

		y.addFunction("syncval",(s)=>{
			return s;
		});

		expect(y.evalSync([
			{or: [
				{syncval: true},
				{syncval: false}
			]}
		])).toEqual(true);

		expect(y.evalSync(
			{or: [false,false,false]}
		)).toEqual(false);

		expect(await y.evalAsync(
			{or: [false,false,false]}
		)).toEqual(false);
	});

	it("knows line numbers",()=>{
		let y=new YaMachine();

		y.addFunction("syncval",(s)=>{
			return s;
		});

		let s=`
sync-val-test: bla
`;

		let o=y.parse(s);

//		console.log(o);
	});

	it("knows line numbers",()=>{
		let y=new YaMachine();

		y.addFunction("syncval",(s)=>{
			return s;
		});

		let s=`- bla: 2
- bli: 5
- test: 1
  test: 2
  test: 3`;

		let o;
		try {
			o=y.parse(s);
		}

		catch (e) {
			expect(e.toString()).toContain("Map keys must be unique");
			expect(lineNumberByCharIndex(s,e.source.range.start)).toEqual(3);
		}
	});

	it("parses",()=>{
		let y=new YaMachine();
		let p=[{
			location: "test",
			"enter-with-message": "hello"
		}];

		//console.log(util.inspect(reparse(p), false, null, true));
	})
})