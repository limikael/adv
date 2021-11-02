import {emStyle, accessibleLinkProps} from "../utils/react-util.js";

export default function InventoryView(props) {
	let things=props.model.story.getInventoryThings();
	let thingList=[];

	let accessible=null;
	if (props.model.currentVerb)
		accessible=accessibleLinkProps();

	for (let thing of things) {
		thingList.push(
			<a onclick={props.model.dispatcher("objectClick",thing.id)}
					{...accessible}>
				{thing.getName()}
			</a>
		);
	}

	let cls="adv-bx bg-body text-warning adv-inventory";
	if (props.model.currentVerb)
		cls+=" adv-verb-selected";

	return (
		<div style={emStyle(8,18,11,11)} class={cls}>
			{thingList}
		</div>
	);
}
