import Story from "../../src/model/Story.mjs";
import StoryClause from "../../src/model/StoryClause.mjs";
import yaml from "yaml";
import fs from "fs";

describe("story",()=>{
	it("works",()=>{
		let story=new Story([{
			location: "hello"
		}]);


		let clause;

		clause=new StoryClause("hello");
		clause.setStory(story);
		expect(clause.getMessage()).toEqual("hello");

		clause=new StoryClause({
			if_location: "hello",
			then: {
				if_location: "hello",
				then: "blabli"
			}
		});
		clause.setStory(story);

		expect(clause.getMessage()).toEqual("blabli");
		expect(clause.getOutcome()).toBe(undefined);

/*		cluase=new StoryClause({
			if_location: "hello",
			then: [
				{if_having: "thing", then: "yep"},
				{if_having: "other_thing", then: "yep"},
			]
		});*/
	});
})