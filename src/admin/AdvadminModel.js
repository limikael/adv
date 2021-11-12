import EventEmitter from "events";

export default class AdvadminModel extends EventEmitter {
	constructor(props) {
		super();

		this.hiddenField=document.getElementById(props.advField);
	}

	getSource() {
		return this.hiddenField.value;
	}

	setSource(source) {
		this.hiddenField.value=source;
	}

	dispatcher=(fn, ...args)=>{
		return (...fnArgs)=>{
			let useArgs=[...args,...fnArgs];
			this[fn](...useArgs);
			this.emit("change");
		}
	}
}