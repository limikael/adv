import EventDispatcher from "events";
import Story from "./Story.mjs";
import StoryHistory from "./StoryHistory.mjs";
import {fetchEx} from "../utils/WebUtil.mjs";

export default class AdvModel extends EventDispatcher {
	constructor(props) {
		super();

		this.props=props;
		this.storyHistory=new StoryHistory();

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

		this.storyHistory.addAction(this.currentVerb,id);
		this.story.execute(this.currentVerb,id).catch((e)=>{
			this.error=e;
			this.emit("change");
		});

		this.currentVerb=null;
	}

	alternativeClick(index) {
		this.storyHistory.addAction("chooseAlternative",index);
		this.story.chooseAlternative(index);
	}

	dismissMessage() {
		this.storyHistory.addAction("dismissMessage");
		this.story.dismissMessage();
	}

	async refresh() {
		await this.loadStory();
	}

	async undo() {
		this.storyHistory.undo();
		await this.loadStory();
	}

	async redo() {
		this.storyHistory.redo();
		await this.loadStory();
	}

	async restart() {
		this.storyHistory=new StoryHistory();
		await this.loadStory();
	}

	async loadStory() {
		if (this.props.storyUrl)
			this.storySource=await fetchEx(this.props.storyUrl);

		else if (this.props.storyStorageKey)
			this.storySource=window.localStorage.getItem(this.props.storyStorageKey);

		else if (this.props.storySessionKey)
			this.storySource=window.sessionStorage.getItem(this.props.storySessionKey);

		else {
			this.storySource=null;
			throw new Error("No story to load...");
		}

		if (this.story) {
			this.story.removeAllListeners();
			this.story=null;
		}

		//console.log("loading source: "+this.storySource);

		this.story=new Story(this.storySource);
		if (!this.story.getError())
			await this.storyHistory.apply(this.story);

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

	getError() {
		if (this.error)
			return this.error;

		if (this.story)
			return this.story.getError();

		return Error("No story loaded");
	}
}