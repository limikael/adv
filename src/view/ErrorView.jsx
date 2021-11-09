import {emStyle} from "../utils/react-util.js";

export default function ErrorView(props) {
	let error=props.error;
	let lineText;
	if (error.lineNumber)
		lineText="on line "+error.lineNumber;

	return (
		<div style={emStyle(0,0,20,30)} class="bg-dark adv-bx">
			<div style={emStyle(0,4,19,2)} class="text-warning">
				{error.name}
			</div>

			<div style={emStyle(0,6,19,2)} class="text-primary">
				{lineText}
			</div>

			<div style={emStyle(0,8,19,10)} class="adv-bx bg-body"/>
			<div style={emStyle(0,8,19,10)} class="text-white">
				{error.message}
			</div>
		</div>
	)
}