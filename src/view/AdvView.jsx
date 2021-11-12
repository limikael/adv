import VerbListView from "./VerbListView.jsx";
import LocationView from "./LocationView.jsx";
import AlertView from "./AlertView.jsx";
import InventoryView from "./InventoryView.jsx";
import HeaderView from "./HeaderView.jsx";
import ChoiceView from "./ChoiceView.jsx";
import MenuView from "./MenuView.jsx";
import ErrorView from "./ErrorView.jsx";
import {emStyle, useIsValueChanged} from "../utils/react-util.js";
import {useErrorBoundary} from "preact/hooks";

function StoryContent(props) {
	return (
		<div style={emStyle(0,0,20,30)}>
			<LocationView model={props.model} />
			<InventoryView model={props.model} />
			<VerbListView model={props.model} />
			<ChoiceView model={props.model} />
			<AlertView model={props.model} />
		</div>
	);	
}

export default function AdvView(props) {
	let storyContent;
	if (props.error)
		storyContent=(
			<div style={emStyle(0,0,20,30)}>
				<ErrorView error={props.error} />
			</div>
		);

	else if (props.model.story) {
		storyContent=<StoryContent model={props.model}/>;
	}

	return (
		<Fragment>
			<div style={emStyle(0,0,20,30)} class="bg-dark adv-bx">
				<HeaderView model={props.model} />
			</div>
			{storyContent}
			<MenuView model={props.model} />
		</Fragment>
	);
}