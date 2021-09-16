import Box from "../utils/Box.jsx";
import "./AdvView.css";
import VerbListView from "./VerbListView.jsx";

function enumerate(strings) {
	let text="";

	for (let i=0; i<strings.length; i++) {
		let string=strings[i];

		if (i==0)
			text+=string;

		else if (i<strings.length-1)
			text+=", "+string;

		else
			text+=" and "+string;
	}

	return text;
}

export default function AdvView(props) {
	let text=props.state.getCurrentLocation().description;

	let things=props.state.getThingsByLocation(props.state.location);
	if (things.length) {
		text+="\n\nThere is "+
			enumerate(things.map(thing=>thing.indefinite))+
			" here.";
	}

	let destinations=props.state.getDestinationsByLocation(props.state.location);
	if (destinations.length) {
		text+="\n\nYou can reach "+
			enumerate(destinations.map(dest=>dest.name))+
			" from here."
	}

	text=text.split("\n").map(t=>(<p>{t}</p>));

	return (
		<Box pos={[0,0]} size={[30,40]} bg="dark" border="white">
			<Box pos={[0,0]} size={[29,29]} border="white" bg="light">
				<Box pos={[0,0]} size={[28,28]} border="none" icls="location-description">
					{text}
				</Box>
			</Box>
			<Box pos={[15,32]} size={[14,7]}>
			</Box>
			<VerbListView state={props.state} />
		</Box>
	);
}