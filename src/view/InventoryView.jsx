import {emStyle, accessibleLinkProps} from "../utils/ReactUtil.jsx";

export default function InventoryView(props) {
	let things=props.state.story.getInventoryThings();
	let thingList=[];

	let accessible=null;
	if (props.state.currentVerb)
		accessible=accessibleLinkProps();

	for (let thing of things) {
		thingList.push(
			<a onclick={props.state.objectClick.bindArgs(thing.id)}
					{...accessible}>
				{thing.getInventoryName()}
			</a>
		);
	}

	let cls="adv-bx bg-body text-primary adv-inventory";
	if (props.state.currentVerb)
		cls+=" adv-verb-selected";

	return (
		<div style={emStyle(8,18,11,11)} class={cls}>
			{thingList}
		</div>
	);
}
