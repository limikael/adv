import Story from "../../src/model/Story.mjs";
import fs from "fs";
import {URL} from 'url';
import {delay} from "../../src/utils/promise-util.js";
import yaml from "yaml";
import {lineNumberByCharIndex} from "../../src/utils/string-util.mjs";

describe("story",()=>{
	it("handles parse errors",()=>{
		let story=new Story("test: hello\ntest: hello2");
		expect(story.getError().name).toEqual("YAMLSemanticError")
	});

	it("can load a story",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);

		expect(story.getError()).toEqual(undefined);
		expect(story.getMessage()).toEqual(["Welcome to the game."]);
		story.dismissMessage();
		expect(story.getMessage()).toEqual(null);

		expect(story.getVerbs().length).toEqual(5);
	});

	it("can handle errors",async ()=>{
		let source=yaml.stringify([
			{location: "hello", bla: "test"}
		]);

		let story=new Story(source);
		expect(story.getError().toString()).toContain("Unknown property");
	});

	it("can handle script errors",async ()=>{
		let source=yaml.stringify([
			{location: "hello", "enter-bla": "test"}
		]);

		let story=new Story(source);
		let e=story.getError();
		expect(e.lineNumber).toEqual(2);
	});
})