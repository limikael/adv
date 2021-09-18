import Box from "../utils/Box.jsx";

export default function InventoryView(props) {
	let things=props.state.story.getInventoryThings();
	let thingList=[];

	for (let thing of things) {
		thingList.push(
			<a onclick={props.state.objectClick.bindArgs(thing.id)}>
				{thing.getInventoryName()}
			</a>
		);
	}

	let cls="";
	if (props.state.currentVerb)
		cls="verb-selected";

	return (
		<Box pos={[8,18]} size={[11,11]} border="white" bg="background" 
				icls="inventory" class={cls}>
			{thingList}
		</Box>
	);
}
