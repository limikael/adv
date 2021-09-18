import Story from "../../src/model/Story.mjs";
import morning_story from "../../src/app/morning_story.mjs";

describe("story",()=>{
	it("works",()=>{
		let story=new Story(morning_story);

		let bathroom=story.getObjectById("bathroom");
		expect(bathroom.id).toEqual("bathroom");

		expect(story.getCurrentLocation().id).toEqual("bedroom");

		story.execute("goto","bathroom");
		expect(story.getCurrentLocation().id).toEqual("bedroom");
		expect(story.getMessage()).toContain("The dark room");
		story.dismissMessage();
		expect(story.getMessage()).toEqual(null);

		story.execute("use","lamp");

		expect(story.using("lamp")).toEqual(true);

		story.execute("goto","bathroom");
		expect(story.getCurrentLocation().id).toEqual("bedroom");
		expect(story.getMessage()).toContain("too cold");
		story.dismissMessage();

		story.execute("use","slippers");
		expect(story.getMessage()).toContain("need to pick them up");
		story.dismissMessage();

		story.execute("pickup","slippers");
		story.execute("use","slippers");
		story.execute("goto","bathroom");
		expect(story.getCurrentLocation().id).toEqual("bathroom");

		story.execute("lookat","lamp");
		expect(story.getMessage()).toContain("lamp is simple and elegant");
	});
})