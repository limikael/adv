import ContentScaler from "../utils/ContentScaler.jsx";
import AdvView from "../view/AdvView.jsx";
import {useReducibleState} from "../utils/ReactUtil.jsx";
import * as AdvReducers from "./AdvReducers.js";
import * as AdvComputers from "./AdvComputers.js";

export default function AdvGame(props) {
	let verbs={
		"goto": "GO TO",
		"pickup": "PICK UP",
		"drop": "DROP",
		"lookat": "LOOK AT",
		"talkto": "TALK TO",
		"use": "USE"
	};

	let story={
		bedroom: {
			name: "the bedroom",
			description: "You are in the bedroom. It is a pretty normal bedroom, with a bed in it.",
			destinations: ["bathroom"]
		},

		bathroom: {
			name: "the bathroom",
			description: "It is a quite normal bathroom.",
			destinations: ["bedroom"]
		},

		toothbrush: {
			name: "toothbrush",
			indefinite: "a toothbrush",
			description: "It is an Oral-B Pro-Health All-In-One Soft Bristle Toothbrush. One of the top 10 market leading toothbrushes for 2020.",
			location: "bathroom"
		},

		slippers: {
			name: "slippers",
			indefinite: "a pair of slippers",
			description: "A pair of slippers with rabbit ears.",
			location: "bedroom"
		},

		lamp: {
			name: "lamp",
			indefinite: "a lamp",
			description: "Lamps are different, but the light is the same",
			location: "bedroom"
		},

		shower: {
			description: "A quite ordinary shower.",
			location: "bathroom"
		}
	};

	let initialState={
		currentVerb: null,
		verbs: verbs,
		location: "bedroom",
		story: story,
		...props
	};

	let state=useReducibleState({
		reducers: AdvReducers,
		computers: AdvComputers,
		initial: initialState
	});

	return (
		<ContentScaler width="300" height="400">
			<AdvView state={state}/>
		</ContentScaler>
	);
}