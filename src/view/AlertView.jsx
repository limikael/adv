import {useRef, useLayoutEffect} from "react";
import {emStyle} from "../utils/react-util.js";

export default function AlertView(props) {
	let ref=useRef();
	let message,fn,text;

	useLayoutEffect(()=>{
		if (ref.current)
			ref.current.scrollTop=0;
	});

	if (!props.model.story.getMessage())
		return null;

	message=props.model.story.getMessage();
	fn=props.model.dispatcher("dismissMessage");
	text="OK";

	return (
		<Fragment>
			<div class="adv-modal-cover bg-body"/>
			<div style={emStyle(1,3,17,17)} class="bg-white adv-bx border-dark">
				<div style={emStyle(0,0,16,13)} class="text-black adv-location-description" ref={ref}>
					<p>{message}</p>
				</div>

				<button style={emStyle(3,13,10,2)} class="adv-btn bg-info text-white adv-bx"
						onclick={fn}>
					{text}
				</button>
			</div>
		</Fragment>
	);
}