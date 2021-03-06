import EventEmitter from "events";
import DocFile from "../utils/DocFile.mjs";

import BasicExample from "../../res/spec/basic-example.yaml";
import MorningStory from "../../res/spec/morning-story.yaml";
import ChoiceExample from "../../res/spec/choice.yaml";

export default class AdvideModel extends EventEmitter {
	constructor() {
		super();

		this.gameFrame=null;
		this.docFile=new DocFile();
		this.docFile.blobOptions={type: "application/x-yaml;charset=utf-8"};
		this.docFile.defaultFileName="Untitled.yaml";

		this.exampleStories={
			"basic-example.yaml": BasicExample,
			"choice.yaml": ChoiceExample,
			"morning-story.yaml": MorningStory
		}

		this.loadExample("basic-example.yaml");

		window.onbeforeunload=()=>{
			if (this.changed)
				return true;
		}
	}

	loadExample=async (fn)=>{
		if (!await this.checkClear())
			return;

		this.setSource(this.exampleStories[fn],true);
		this.docFile.clear();
		this.changed=false;
		this.updateTitle();
		this.emit("change");
	}

	updateTitle() {
		if (this.docFile.supportsFileSystemAccess()) {
			let t=this.docFile.getFileName();

			if (this.changed)
				document.title=t+" * - Advide";

			else
				document.title=t+" - Advide";
		}

		else {
			if (this.changed)
				document.title="Advide *";

			else
				document.title="Advide";
		}
	}

	async saveStoryAs() {
		if (await this.docFile.saveAs(this.source)) {
			this.changed=false;
			this.updateTitle();
		}
	}

	async saveStory() {
		if (await this.docFile.save(this.source)) {
			this.changed=false;
			this.updateTitle();
		}
	}

	checkClear() {
		if (!this.changed)
			return true;

		return confirm("Current story has unsaved changes.\n\nDiscard changes?");
	}

	newStory() {
		if (!this.checkClear())
			return;

		this.docFile.clear();
		this.setSource("",true);
		this.changed=false;
		this.updateTitle();
	}

	async openStory() {
		if (!this.checkClear())
			return;

		let newSource=await this.docFile.open();
		if (newSource!==undefined) {
			this.setSource(newSource,true);
			this.changed=false;
			this.updateTitle();
		}
	}

	setSource=async (source, restart)=>{
		this.source=source;
		window.sessionStorage.setItem("advsource",this.source);
		this.notifyGameFrame(restart===true);

		if (!this.changed) {
			this.changed=true;
			this.updateTitle();
		}

		this.emit("change");
	}

	getSource() {
		return this.source;
	}

	setGameFrame(frame) {
		if (frame!=this.gameFrame) {
			this.gameFrame=frame;
			this.notifyGameFrame();
		}
	}

	notifyGameFrame(restart) {
		if (this.gameFrame) {
			if (restart)
				this.gameFrame.contentWindow.postMessage("restart");

			else
				this.gameFrame.contentWindow.postMessage("refresh");
		}
	}

	supportsFileSystemAccess() {
		return this.docFile.supportsFileSystemAccess();
	}

	dispatcher=(fn, ...args)=>{
		return (...fnArgs)=>{
			if (fnArgs[0] instanceof Event)
				fnArgs[0].preventDefault();

			let useArgs=[...args,...fnArgs];
			this[fn](...useArgs);
			this.emit("change");
		}
	}
}