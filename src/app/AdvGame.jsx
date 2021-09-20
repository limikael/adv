import ContentScaler from "../utils/ContentScaler.jsx";
import AdvView from "../view/AdvView.jsx";
import {useReducibleState} from "../utils/ReactUtil.jsx";
import * as AdvReducers from "./AdvReducers.js";
import * as AdvComputers from "./AdvComputers.js";
import * as AdvWorkers from "./AdvWorkers.js";
import Story from "../model/Story.mjs";

export default function AdvGame(props) {
	let verbs={
		"goto": "GO TO",
		"pickup": "PICK UP",
		"lookat": "LOOK AT",
		"use": "USE",
		"drop": "DROP"
	};

	let initialState={
		currentVerb: null,
		verbs: verbs,
		...props
	};

	let state=useReducibleState({
		workers: AdvWorkers,
		reducers: AdvReducers,
		computers: AdvComputers,
		initial: initialState
	});

	if (!state.initialized)
		state.loadStory();

	return (
		<ContentScaler width="200" height="300">
			<AdvView state={state}/>
		</ContentScaler>
	);
}