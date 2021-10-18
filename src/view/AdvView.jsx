import VerbListView from "./VerbListView.jsx";
import LocationView from "./LocationView.jsx";
import AlertView from "./AlertView.jsx";
import InventoryView from "./InventoryView.jsx";
import HeaderView from "./HeaderView.jsx";
import ChoiceView from "./ChoiceView.jsx";
import {emStyle} from "../utils/ReactUtil.jsx";

export default function AdvView(props) {
	let storyContent;
	if (props.state.story) {
		storyContent=(
			<Fragment>
				<HeaderView state={props.state} />
				<LocationView state={props.state} />
				<InventoryView state={props.state} />
				<VerbListView state={props.state} />
				<ChoiceView state={props.state} />
				<AlertView state={props.state} />
			</Fragment>
		);
	}

	return (
		<div style={emStyle(0,0,20,30)} class="bg-dark adv-bx">
			{storyContent}
		</div>

	);
}