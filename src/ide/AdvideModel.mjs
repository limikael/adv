import EventEmitter from "events";
import {createIpcRendererReceiver} from "../utils/electron-util.js";

export default class AdvideModel extends EventEmitter {
	constructor() {
		super();

		this.setSource("");
		this.gameFrame=null;

		this.ipcReceiver=createIpcRendererReceiver("advide",this);
	}

	onIpcRendererMessage=(ev, message)=>{
		console.log(ev);
		console.log(message);
	}

	loadSource(fileName) {
		this.setSource(fs.loadFileSync(fileName));
	}

	setSource=(source)=>{
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
			let useArgs=[...args,...fnArgs];
			this[fn](...useArgs);
			this.emit("change");
		}
	}
}