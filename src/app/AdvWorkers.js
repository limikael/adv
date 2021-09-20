import {fetchEx} from "../utils/WebUtil.js";
import Story from "../model/Story.mjs";

export async function loadStory(update) {
	let state;

	state=update();
	state.initialized=true;
	update(state);

	let storyContent=await fetchEx(state.storyUrl,{
		parse: "yaml"
	});

	state=update();
	state.story=new Story(storyContent);
	update(state);
}