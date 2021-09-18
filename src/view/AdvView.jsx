import Box from "../utils/Box.jsx";
import "./AdvView.css";
import VerbListView from "./VerbListView.jsx";
import LocationView from "./LocationView.jsx";
import AlertView from "./AlertView.jsx";
import InventoryView from "./InventoryView.jsx";

export default function AdvView(props) {
	return (
		<Box pos={[0,0]} size={[30,40]} bg="dark" border="white">
			<LocationView state={props.state} />
			<InventoryView state={props.state} />
			<VerbListView state={props.state} />
			<AlertView state={props.state} />
		</Box>
	);
}