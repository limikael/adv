import {linkify} from "../../src/utils/WebUtil.mjs";
//require("../../src/utils/ReactUtil.jsx");

describe("linkify",()=>{
	it("can make links",()=>{
		expect(linkify("hello")).toEqual(["hello"]);

		function processor(key) {
			return "**key: "+key+"**";
		}

//		console.log(linkify("hello [test] world [and] such",processor));

		expect(linkify("hello [test] world [and] such",processor)).toEqual(
			["hello ","**key: test**"," world ","**key: and**"," such"]);

		expect(linkify("hello [test] world [and] such",processor)).toEqual(
			["hello ","**key: test**"," world ","**key: and**"," such"]);

		expect(linkify("hello @world wassup",processor)).toEqual(["hello ","**key: world**"," wassup"]);
		expect(linkify("hello @world",processor)).toEqual(["hello ","**key: world**",""]);
	});
})