import Box from "../utils/Box.jsx";
import "./AdvView.css";
import VerbListView from "./VerbListView.jsx";
import LocationView from "./LocationView.jsx";

export default function AdvView(props) {
	return (
		<Box pos={[0,0]} size={[30,40]} bg="dark" border="white">
			<LocationView state={props.state} />
			<Box pos={[15,32]} size={[14,7]}/>
			<VerbListView state={props.state} />
		</Box>
	);
}