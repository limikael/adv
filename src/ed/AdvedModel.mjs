import EventEmitter from "events";
import {selectAndLoadFile} from "../utils/WebUtil.mjs";

export default class AdvedModel extends EventEmitter {
	constructor() {
		super();

		this.setSource("");
//		this.setSource(window.sessionStorage.getItem("advsource"));

		this.gameFrame=null;
	}

	find(searchString) {
		console.log("finding: "+searchString);
	}

	newStory() {
		this.setSource("");
	}

	async openStory() {
		let newSource=await selectAndLoadFile();

		if (newSource!==undefined)
			this.setSource(newSource);
	}

	setSource=async (source)=>{
		this.source=source;
		window.sessionStorage.setItem("advsource",this.source);
		this.notifyGameFrame();
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