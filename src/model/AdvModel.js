import EventDispatcher from "events";
import Story from "./Story.mjs";
import {fetchEx} from "../utils/WebUtil.mjs";

export default class AdvModel extends EventDispatcher {
	constructor(props) {
		super();

		this.props=props;

		this.safeLoadStory();
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

		this.story.actionExecute(this.currentVerb,id).catch((e)=>{
			this.error=e;
			this.emit("change");
		});

		this.currentVerb=null;
	}

	alternativeClick(index) {
		this.story.chooseAlternative(index);
	}

	dismissMessage() {
		this.story.dismissMessage();
		console.log("after dismiss, num actions="+this.story.getActions().length);
	}

	async refresh() {
		console.log("enter refresh, num actions="+this.story.getActions().length);
		if (!this.story)
			return await this.safeLoadStory();

		try {
			this.error=null;
			let actions=this.story.getActions();
			await this.loadStory();
			console.log("will apply, num actions="+actions.length);
			console.log(actions);
			await this.story.applyActions(actions);
			this.emit("change");
		}

		catch (e) {
			this.error=e;
			this.emit("change");
		}
	}

	async undo() {
		let actions=this.story.getActions();
		actions.pop();
		await this.loadStory();
		await this.story.applyActions(actions);
		this.emit("change");
	}

	async restart() {
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

		this.story=new Story(this.storySource);
		this.story.on("change",()=>{
			this.emit("change");
		});
		this.emit("change");
	}

	async safeLoadStory() {
		try {
			this.error=null;
			await this.loadStory();
		}

		catch (e) {
			this.error=e;
			this.emit("change");
		}
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