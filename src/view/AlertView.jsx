import Box from "../utils/Box.jsx";
import {useRef, useLayoutEffect} from "react";

export default function AlertView(props) {
	let ref=useRef();
	let message,fn,text;

	useLayoutEffect(()=>{
		if (ref.current)
			ref.current.scrollTop=0;
	});

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
			<Box pos={[1,1]} size={[17,20]} border="light" bg="light">
				<Box pos={[0,0]} size={[16,16]} border="none" icls="location-description" ref={ref}>
					<p>{message}</p>
				</Box>

				<Box ocls="btn" pos={[3,16]} size={[10,2]} bg="info" border="info" icls="text-center" text="white"
						onclick={fn}>
					{text}
				</Box>
			</Box>
		</Fragment>
	);
}