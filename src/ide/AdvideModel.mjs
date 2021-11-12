import EventEmitter from "events";

export default class AdvideModel extends EventEmitter {
	constructor() {
		super();

		this.setSource("");
		this.gameFrame=null;
	}

	setSource=(source)=>{
		this.source=source;
		window.sessionStorage.setItem("advsource",this.source);
		this.notifyGameFrame();
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