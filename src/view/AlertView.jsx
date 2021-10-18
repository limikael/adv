import {useRef, useLayoutEffect} from "react";
import {emStyle} from "../utils/ReactUtil.jsx";

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

	else if (props.state.story.isComplete()) {
		message=props.state.story.getCompleteMessage();
		fn=props.state.restart;
		text="PLAY AGAIN";
	}

	else
		return null;

	return (
		<Fragment>
			<div class="adv-modal-cover bg-body"/>
			<div style={emStyle(1,3,17,17)} class="bg-white adv-bx border-dark">
				<div style={emStyle(0,0,16,13)} class="text-black adv-location-description" ref={ref}>
					<p>{message}</p>
				</div>

				<button style={emStyle(3,13,10,3)} class="adv-btn bg-info text-white adv-bx"
						onclick={fn}>
					{text}
				</button>
			</div>
		</Fragment>
	);
}