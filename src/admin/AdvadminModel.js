import EventEmitter from "events";

export default class AdvadminModel extends EventEmitter {
	constructor(props) {
		super();

		this.hiddenField=document.getElementById(props.advField);
		this.setSource(this.getSource());
	}

	getSource() {
		return this.hiddenField.value;
	}

	setSource(source) {
		this.hiddenField.value=source;
		window.localStorage.setItem("adventure-preview",source);
	}

	dispatcher=(fn, ...args)=>{
		return (...fnArgs)=>{
			let useArgs=[...args,...fnArgs];
			this[fn](...useArgs);
			this.emit("change");
		}
	}
}