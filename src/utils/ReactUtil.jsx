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

	/*for (let workerName in options.workers) {
		state[workerName]=function(...args) {
			function update(newState) {
				if (!newState)
					return ref.current.state;

				ref.current.setState(JSON.parse(JSON.stringify(newState)));
			}

			options.workers[workerName](update,...args);
		};
	}*/

	return state;
}
