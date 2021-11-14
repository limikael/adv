import EventEmitter from "events";
import {selectAndLoadFile} from "../utils/WebUtil.mjs";
import {saveAs} from "file-saver";

export default class AdvideModel extends EventEmitter {
	constructor() {
		super();

		this.setSource("");
//		this.setSource(window.sessionStorage.getItem("advsource"));

		this.gameFrame=null;
		this.fileName=null;
		this.changed=false;
		this.updateTitle();

		window.onbeforeunload=()=>{
			if (this.changed)
				return true;
		}
	}

	updateTitle() {
		let useName="Untitled";
		if (this.fileName)
			useName=this.fileName;

		if (this.changed)
			useName+=" *";

		document.title=useName+" - Advide";
	}

	async saveStoryAs() {
		let useName="Untitled.yaml";
		if (this.fileName)
			useName=this.fileName;

		let blob=new Blob([this.getSource()], {type: "application/x-yaml;charset=utf-8"});
		let v=saveAs(blob,useName);
		this.changed=false;
		this.updateTitle();
	}

	checkClear() {
		if (!this.changed)
			return true;

		return confirm("Current story has unsaved changes.\n\nDiscard changes?");
	}

	newStory() {
		if (!this.checkClear())
			return;

		this.fileName=null;
		this.setSource("");
		this.changed=false;
		this.updateTitle();
	}

	async openStory() {
		if (!this.checkClear())
			return;

		let file=await selectAndLoadFile();

		if (file) {
			this.fileName=file.name;
			this.setSource(file.value);
			this.changed=false;
			this.updateTitle();
		}
	}

	setSource=async (source)=>{
		this.source=source;
		window.sessionStorage.setItem("advsource",this.source);
		this.notifyGameFrame();

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

	notifyGameFrame() {
		if (this.gameFrame)
			this.gameFrame.contentWindow.postMessage("refresh");
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