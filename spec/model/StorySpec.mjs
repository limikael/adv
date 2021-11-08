import Story from "../../src/model/Story.mjs";
import fs from "fs";
import {URL} from 'url';
import {delay} from "../../src/utils/promise-util.mjs";

describe("story",()=>{
	it("handles parse errors",()=>{
		let story=new Story("test: hello\ntest: hello2");
		expect(story.getError().constructor.name).toEqual("YAMLSemanticError")
	});

	it("can load a story",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);
		expect(story.getError()).toEqual(undefined);

		//console.log("created, delaying");
		await delay(0);

		expect(story.getMessage()).toEqual(["Welcome to the game."]);
	});
})