import Box from "../utils/Box.jsx";

export default function AlertView(props) {
	let message,fn,text;

	if (props.state.story.getMessage()) {
		message=props.state.story.getMessage();
		fn=props.state.dismissMessage;
		text="OK";
	}

	else if (props.state.story.getStoryCompleteMessage()) {
		message=props.state.story.getStoryCompleteMessage();
		fn=props.state.restart;
		text="PLAY AGAIN";
	}

	else
		return null;

	return (
		<Fragment>
			<div class="modal-cover"/>
			<Box pos={[2,2]} size={[15,20]} border="dark" bg="light">
				<Box pos={[0,0]} size={[14,16]} border="none" icls="location-description">
					<p>{message}</p>
				</Box>

				<Box ocls="btn" pos={[2,16]} size={[10,2]} bg="info" border="dark" icls="text-center" text="white"
						onclick={fn}>
					{text}
				</Box>
			</Box>
		</Fragment>
	);
}