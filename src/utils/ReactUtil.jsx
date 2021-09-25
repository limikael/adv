import {useRef, useReducer} from "react";

export function useForceUpdate() {
	const [_, forceUpdate] = useReducer((x) => x + 1, 0);

	return forceUpdate;
}

export function useReducibleState(options) {
	if (!options.reducers) options.reducers={};
	if (!options.computers) options.computers={};
	if (!options.workers) options.workers={};

	let forceUpdate=useForceUpdate();
	let ref=useRef(options.initial);
	let state=ref.current;

	for (let reducerName in options.reducers) {
		let f=(...args)=>{
			ref.current=options.reducers[reducerName](state,...args);
			forceUpdate();
		};

		f.bindArgs=(...args)=>{
			return f.bind(this,...args);
		};

		state[reducerName]=f;
	}

	for (let computerName in options.computers) {
		state[computerName]=function(...args) {
			return options.computers[computerName](state,...args);
		};
	}

	for (let workerName in options.workers) {
		state[workerName]=function(...args) {
			function update(newState) {
				if (!newState)
					return ref.current;

				ref.current=newState;
				forceUpdate();
			}

			options.workers[workerName](update,...args);
		};
	}

	return state;
}

export function useIsValueChanged(value) {
	let ref=useRef();
	let change=false;

	if (value!=ref.current)
		change=true;

	ref.current=value;

	return change;
}

export function emStyle(x, y, w, h) {
	return {
		"left": (x+.2)+"em",
		"top": (y+.2)+"em",
		"width": (w-.4)+"em",
		"height": (h-.4)+"em",
		"box-sizing": "border-box",
		"border-width": "0.1em",
		"border-style": "solid",
		"padding": "0.2em",
		"line-height": "1em",
		"margin": "0.2em",
		"border-color": "transparent"
	};
}

export function emAppStyle() {
	return {
		"margin": "-0.2em",
		"width": "100%",
		"height": "100%"
	};
}
