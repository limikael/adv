import {useRef, useLayoutEffect} from "react";
import {emStyle} from "../utils/react-util.js";

export default function AlertView(props) {
	let ref=useRef();
	let messages=[],fn,buttonText;

	useLayoutEffect(()=>{
		if (ref.current)
			ref.current.scrollTop=0;
	});

	if (props.model.story.isFinished()) {
		if (props.model.story.dead)
			messages.push(
				<p class="adv-location-top bg-danger">
					YOU DIED
				</p>
			);

		else
			messages.push(
				<p class="adv-location-top bg-success">
					GAME COMPLETE
				</p>
			);

		messages.push(
			<p>Thanks for playing!!!</p>
		);

		fn=props.model.dispatcher("restart");
		buttonText="PLAY AGAIN";
	}

	else if (props.model.story.getMessage() &&
			!props.model.story.getAlternatives()) {
		for (let message of props.model.story.getMessage())
			if (message)
				messages.push(<p>{String(message)}</p>);

		fn=props.model.dispatcher("dismissMessage");
		buttonText="OK";
	}

	else
		return null;

	return (
		<Fragment>
			<div class="adv-modal-cover bg-body"/>
			<div style={emStyle(1,3,17,17)} class="bg-white adv-bx border-dark">
				<div style={emStyle(0,0,16,13)} class="text-black adv-location-description" ref={ref}>
					{messages}
				</div>

				<button style={emStyle(3,13,10,2)} class="adv-btn bg-info text-white adv-bx"
						onclick={fn}>
					{buttonText}
				</button>
			</div>
		</Fragment>
	);
}