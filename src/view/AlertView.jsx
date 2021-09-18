import Box from "../utils/Box.jsx";

export default function AlertView(props) {
	if (!props.state.story.getMessage())
		return;

	return (
		<Fragment>
			<div class="modal-cover"/>
			<Box pos={[2,2]} size={[15,20]} border="dark" bg="light">
				<Box pos={[0,0]} size={[14,19]} border="none" icls="location-description">
					<p>{props.state.story.getMessage()}</p>
				</Box>

				<Box ocls="btn" pos={[2,16]} size={[10,2]} bg="info" border="dark" icls="text-center" text="white"
						onclick={props.state.dismissMessage}>
					OK
				</Box>
			</Box>
		</Fragment>
	);
}