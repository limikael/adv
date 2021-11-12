import Story from "../../src/model/Story.mjs";
import StoryHistory from "../../src/model/StoryHistory.mjs";
import {delay} from "../../src/utils/promise-util.js";
import fs from "fs";

describe("StoryHistory",()=>{
	it("can be applied to a story",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);

		let storyHistory=new StoryHistory();
		storyHistory.addAction("dismissMessage");

		await storyHistory.apply(story);

		expect(story.getError()).toEqual(undefined);
		expect(story.getMessage()).toEqual(null);
	});

	it("can do undo",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);

		let storyHistory=new StoryHistory();
		storyHistory.addAction("dismissMessage");
		storyHistory.addAction("pickup","ball");
		storyHistory.addAction("dismissMessage");
		storyHistory.addAction("lookat","ball");
		await storyHistory.apply(story);

		expect(story.getError()).toEqual(undefined);
		expect(story.getMessage()[0]).toContain("is a ball");

//		storyHistory.undo();
//		storyHistory.undo();
//		story=new Story(source);
//		await storyHistory.apply(story);
//		expect(story.getError()).toEqual(undefined);
//		expect(story.getMessage()[0]).toContain("pick it up");

//		storyHistory.redo();
//		storyHistory.redo();
//		story=new Story(source);
//		await storyHistory.apply(story);
//		expect(story.getError()).toEqual(undefined);
//		expect(story.getMessage()[0]).toContain("it is a ball");
	});

	it("can be applied to a story",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);

		let storyHistory=new StoryHistory();
		storyHistory.addAction("dismissMessage");
		storyHistory.addAction("use","lever");
		storyHistory.addAction("chooseAlternative",1);

		await storyHistory.apply(story);

		expect(story.getError()).toEqual(undefined);
		expect(story.getMessage()[0]).toContain("Nothing interesting happens");
	});

	it("handles errors",async ()=>{
		let source=fs.readFileSync(new URL('./choice.yaml', import.meta.url).pathname);
		let story=new Story(source);

		let storyHistory=new StoryHistory();
		storyHistory.addAction("dismissMessage");
		storyHistory.addAction("gooo","blabla");

		await storyHistory.apply(story);

		expect(story.getError().message).toContain("while restoring state");
	});
})