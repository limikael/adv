import Story from "../../src/model/Story.mjs";
import StoryHistory from "../../src/model/StoryHistory.mjs";
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
})