import {fetchEx} from "../utils/WebUtil.js";
import Story from "../model/Story.mjs";
import yaml from "yaml";

export async function loadStory(update) {
	let state;

	state=update();
	state.initialized=true;
	update(state);

	let storySource;

	if (state.storyUrl)
		storySource=await fetchEx(state.storyUrl);

	else if (state.storyStorageKey)
		storySource=window.localStorage.getItem(state.storyStorageKey);

	else
		throw new Error("No story to load...");

	let storyContent=yaml.parse(storySource);

	state=update();
	state.story=new Story(storyContent);
	update(state);
}