import EventEmitter from "events";
import DocFile from "../utils/DocFile.mjs";

export default class AdvideModel extends EventEmitter {
	constructor() {
		super();

		this.gameFrame=null;
		this.docFile=new DocFile();
		this.docFile.blobOptions={type: "application/x-yaml;charset=utf-8"};
		this.docFile.defaultFileName="Untitled.yaml";

		this.setSource("");
		//this.setSource(window.sessionStorage.getItem("advsource"));

		this.changed=false;
		this.updateTitle();

		window.onbeforeunload=()=>{
			if (this.changed)
				return true;
		}
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
		this.setSource("");
		this.changed=false;
		this.updateTitle();
	}

	async openStory() {
		if (!this.checkClear())
			return;

		let newSource=await this.docFile.open();
		if (newSource!==undefined) {
			this.setSource(newSource);
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