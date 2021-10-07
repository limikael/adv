import ContentScaler from "../utils/ContentScaler.jsx";
import AdvView from "../view/AdvView.jsx";
import {useReducibleState, emAppStyle} from "../utils/ReactUtil.jsx";
import * as AdvReducers from "./AdvReducers.js";
import * as AdvComputers from "./AdvComputers.js";
import * as AdvWorkers from "./AdvWorkers.js";
import Story from "../model/Story.mjs";
import "./AdvGame.css";

export default function AdvGame(props) {
	let initialState={
		currentVerb: null,
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
			<div class="adv-main">
				<div style={emAppStyle()}>
					<AdvView state={state}/>
				</div>
			</div>
		</ContentScaler>
	);
}