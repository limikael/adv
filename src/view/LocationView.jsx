import Box from "../utils/Box.jsx";

function enumerate(strings) {
	let text=[];

	for (let i=0; i<strings.length; i++) {
		let string=strings[i];

		if (i==0)
			text.push(string);

		else if (i<strings.length-1) {
			text.push(", ");
			text.push(string);
		}

		else {
			text.push(" and ");
			text.push(string);
		}
	}

	return text;
}

export default function LocationView(props) {
	let text=[];

	text.push(<p>{props.state.getCurrentLocation().description}</p>);

	let things=props.state.getThingsByLocation(props.state.location);
	if (things.length) {
		function linkThing(thing) {
			return (
				<a>{thing.indefinite}</a>
			);
		}

		text.push(<p>There is {enumerate(things.map(linkThing))} here.</p>);
	}

	let destinations=props.state.getDestinationsByLocation(props.state.location);
	if (destinations.length) {
		function linkDest(dest) {
			return (
				<a>{dest.name}</a>
			);
		}

		text.push(<p>
			You can reach {enumerate(destinations.map(linkDest))} from here.
		</p>);
	}

	let cls="";
	if (props.state.currentVerb)
		cls="verb-selected";

	return (
		<Box pos={[0,0]} size={[29,29]} border="white" bg="light" class={cls}>
			<Box pos={[0,0]} size={[28,28]} border="none" icls="location-description">
				{text}
			</Box>
		</Box>
	);
}