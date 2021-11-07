import EventDispatcher from "events";
import Story from "./Story.mjs";
import yaml from "yaml";
import {fetchEx} from "../utils/WebUtil.mjs";

export default class AdvModel extends EventDispatcher {
	constructor(props) {
		super();

		this.props=props;

		this.loadStory();
	}

	toggleCurrentVerb(verb) {
		if (this.currentVerb==verb)
			this.currentVerb=null;

		else
			this.currentVerb=verb;
	}

	objectClick(id) {
		if (!this.currentVerb)
			return;

		this.story.execute(this.currentVerb,id);

		this.currentVerb=null;
	}

	alternativeClick(todo) {
		this.story.chooseAlternative(todo);
	}

	dismissMessage() {
		this.story.dismissMessage();
	}

	async restart() {
		this.loadStory();
	}

	async loadStory() {
		let storySource;

		if (this.props.storyUrl)
			storySource=await fetchEx(this.props.storyUrl);

		else if (this.props.storyStorageKey)
			storySource=window.localStorage.getItem(this.props.storyStorageKey);

		else if (this.props.storySessionKey)
			storySource=window.sessionStorage.getItem(this.props.storySessionKey);

		else
			throw new Error("No story to load...");

		if (this.story) {
			this.story.removeAllListeners();
			this.story=null;
		}

		let storyContent=yaml.parse(storySource);

		this.story=new Story(storyContent);
		this.story.on("change",()=>{
			this.emit("change");
		});
		this.emit("change");
	}

	toggleMenu() {
		this.menuVisible=!this.menuVisible;
	}

	dispatcher=(fn, ...args)=>{
		return ()=>{
			this[fn](...args);
			this.emit("change");
		}
	}
}