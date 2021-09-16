import {useState, useEffect, useRef, useCallback, forwardRef} from "react";

export function useReducibleState(options) {
	if (!options.reducers) options.reducers={};
	if (!options.computers) options.computers={};
	if (!options.workers) options.workers={};

	let ref=useRef({});
	let [state,setState]=useState(options.initial);

	ref.current.state=state;
	ref.current.setState=setState;

	for (let reducerName in options.reducers) {
		let f=(...args)=>{
			let newState=options.reducers[reducerName](state,...args);
			setState(JSON.parse(JSON.stringify(newState)));
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
					return ref.current.state;

				ref.current.setState(JSON.parse(JSON.stringify(newState)));
			}

			options.workers[workerName](update,...args);
		};
	}

	return state;
}
