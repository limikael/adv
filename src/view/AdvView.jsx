import VerbListView from "./VerbListView.jsx";
import LocationView from "./LocationView.jsx";
import AlertView from "./AlertView.jsx";
import InventoryView from "./InventoryView.jsx";
import HeaderView from "./HeaderView.jsx";
import ChoiceView from "./ChoiceView.jsx";
import {emStyle} from "../utils/react-util.js";

export default function AdvView(props) {
	let storyContent;
	if (props.model.story) {
		storyContent=(
			<Fragment>
				<HeaderView model={props.model} />
				<LocationView model={props.model} />
				<InventoryView model={props.model} />
				<VerbListView model={props.model} />
				<ChoiceView model={props.model} />
				<AlertView model={props.model} />
			</Fragment>
		);
	}

	return (
		<div style={emStyle(0,0,20,30)} class="bg-dark adv-bx">
			{storyContent}
		</div>

	);
}