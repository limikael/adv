import Story from "../../src/model/Story.mjs";
import fs from "fs";
import {URL} from 'url';
import {delay} from "../../src/utils/promise-util.mjs";
import yaml from "yaml";

describe("story",()=>{
	it("handles parse errors",()=>{
		let story=new Story("test: hello\ntest: hello2");
		expect(story.getError().constructor.name).toEqual("YAMLSemanticError")
	});

	it("can load a story",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);
		expect(story.getError()).toEqual(undefined);

		expect(story.getMessage()).toEqual(["Welcome to the game."]);
		story.dismissMessage();
		expect(story.getMessage()).toEqual(null);
	});

	it("can handle errors",async ()=>{
		let source=yaml.stringify([
			{location: "hello", bla: "test"}
		]);

		let story=new Story(source);
		expect(story.getError().toString()).toContain("Unknown property: bla");
	});
})