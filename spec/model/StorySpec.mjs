import Story from "../../src/model/Story.mjs";
import StoryPredicate from "../../src/model/StoryPredicate.mjs";
import yaml from "yaml";
import fs from "fs";

describe("story",()=>{
	it("works",()=>{
		let story=new Story(yaml.parse(fs.readFileSync("./res/spec/morning_story.yaml","utf-8")));

		let bathroom=story.getObjectById("bathroom");
		expect(bathroom.id).toEqual("bathroom");

		expect(story.getCurrentLocation().id).toEqual("bedroom");

		story.execute("goto","bathroom");
		expect(story.getCurrentLocation().id).toEqual("bedroom");
		expect(story.getMessage()).toContain("The dark room");
		story.dismissMessage();
		expect(story.getMessage()).toEqual(null);

		story.execute("use","lamp");

		expect(story.getObjectById("lamp").using).toEqual(true);

		story.execute("goto","bathroom");
		expect(story.getCurrentLocation().id).toEqual("bedroom");
		expect(story.getMessage()).toContain("too cold");
		story.dismissMessage();

		story.execute("use","slippers");
		expect(story.getMessage()).toContain("need to pick them up");
		story.dismissMessage();
		//console.log(story.getCurrentLocation().id);

		story.execute("pickup","slippers");
		story.execute("use","slippers");

		story.dismissMessage();

		story.execute("goto","bathroom");
		expect(story.getCurrentLocation().id).toEqual("bathroom");

		story.execute("lookat","lamp");
		expect(story.getMessage()).toContain("lamp is simple and elegant");
	});
})