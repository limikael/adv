import ContentScaler from "../utils/ContentScaler.jsx";
import AdvView from "../view/AdvView.jsx";
import {useReducibleState} from "../utils/ReactUtil.jsx";
import * as AdvReducers from "./AdvReducers.js";
import * as AdvComputers from "./AdvComputers.js";
import Story from "../model/Story.mjs";
import morning_story from "./morning_story.mjs";

let story=new Story(morning_story);

export default function AdvGame(props) {
	let verbs={
		"goto": "GO TO",
		"pickup": "PICK UP",
		"lookat": "LOOK AT",
		"use": "USE"
	};

	let initialState={
		currentVerb: null,
		verbs: verbs,
		...props
	};

	let state=useReducibleState({
		reducers: AdvReducers,
		computers: AdvComputers,
		initial: initialState
	});

	state.story=story;

	return (
		<ContentScaler width="300" height="400">
			<AdvView state={state}/>
		</ContentScaler>
	);
}