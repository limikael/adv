import EventEmitter from "events";

export default class AdvadminModel extends EventEmitter {
	constructor(props) {
		super();

		this.source=props.advSource;
	}

	getSource() {
		return this.source;
	}

	setSource(source) {
		this.source=source;
	}

	dispatcher=(fn, ...args)=>{
		return (...fnArgs)=>{
			let useArgs=[...args,...fnArgs];
			this[fn](...useArgs);
			this.emit("change");
		}
	}
}