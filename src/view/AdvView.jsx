import Box from "../utils/Box.jsx";
import "./AdvView.css";
import VerbListView from "./VerbListView.jsx";

export default function AdvView(props) {
	return (
		<Box pos={[0,0]} size={[30,40]} bg="dark" border="white">
			<Box pos={[0,0]} size={[29,29]} border="white" bg="light">
				<Box pos={[0,0]} size={[28,28]} border="none">
					{props.state.getCurrentLocation().description}
				</Box>
			</Box>
			<Box pos={[15,32]} size={[14,7]}>
			</Box>
			<VerbListView state={props.state} />
		</Box>
	);
}