import EventEmitter from "events";
import {createIpcRendererReceiver, createIpcRendererProxy} from "../utils/electron-util.js";

export default class AdvideModel extends EventEmitter {
	constructor() {
		super();

		this.ipcReceiver=createIpcRendererReceiver("advide",this);
		this.proxy=createIpcRendererProxy("advide");

		this.setSource("");
		this.gameFrame=null;
		this.clearSourceChange();
	}

	find(searchString) {
		console.log("finding: "+searchString);
	}

	clearSourceChange=()=>{
		this.sourceChange=false;
	}

	setSource=async (source)=>{
		this.source=source;
		window.sessionStorage.setItem("advsource",this.source);
		this.notifyGameFrame();
		this.emit("change");

		if (!this.sourceChange && this.source) {
			this.sourceChange=true;
			await this.proxy.notifySourceChange();
		}
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
			let useArgs=[...args,...fnArgs];
			this[fn](...useArgs);
			this.emit("change");
		}
	}
}