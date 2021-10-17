import {useRef, useLayoutEffect} from "react";
import {emStyle} from "../utils/ReactUtil.jsx";

export default function ChoiceView(props) {
	let ref=useRef();
	let message,fn,text;

	useLayoutEffect(()=>{
		if (ref.current)
			ref.current.scrollTop=0;
	});

	if (!props.state.story.getCurrentChoice())
		return null;

	let choice=props.state.story.getCurrentChoice();
	let alternativeButtons=[];
	let i=0;
	let top=23-choice.getAlternatives().length*3;
	for (let alternative of choice.getAlternatives()) {
		alternativeButtons.push(
			<button style={emStyle(1,top+3*i,14,3)} class="adv-btn bg-info text-white adv-bx"
					onclick={fn}>
				{alternative.description}
			</button>
		);

		i++;
	}

	return (
		<Fragment>
			<div class="adv-modal-cover bg-body"/>
			<div style={emStyle(1,3,17,25)} class="bg-white adv-bx border-dark">
				<div style={emStyle(0,0,16,top)} class="text-black adv-location-description" ref={ref}>
					<p>{choice.description}</p>
				</div>

				{alternativeButtons}
			</div>
		</Fragment>
	);
}