import {useRef, useLayoutEffect} from "react";
import {emStyle} from "../utils/react-util.js";
import StoryAlternative from "../model/StoryAlternative.mjs";

export default function ChoiceView(props) {
	let ref=useRef();
	let message,fn,text;

	useLayoutEffect(()=>{
		if (ref.current)
			ref.current.scrollTop=0;
	});

	if (!props.model.story.getAlternatives())
		return null;

	let descriptions=[];
	for (let message of props.model.story.getMessage())
		if (!(message instanceof StoryAlternative)
				&& message)
			descriptions.push(<p>{String(message)}</p>);

	let alternativeButtons=[];
	let i=0;
	let top=23-props.model.story.getAlternatives().length*3;
	for (let alternative of props.model.story.getAlternatives()) {
		alternativeButtons.push(
			<button style={emStyle(1,top+3*i,14,3)} class="adv-btn bg-info text-white adv-bx"
					onclick={props.model.dispatcher("alternativeClick",i)}>
				{String(alternative.label)}
			</button>
		);

		i++;
	}

	return (
		<Fragment>
			<div class="adv-modal-cover bg-body"/>
			<div style={emStyle(1,3,17,25)} class="bg-white adv-bx border-dark">
				<div style={emStyle(0,0,16,top)} class="text-black adv-location-description" ref={ref}>
					{descriptions}
				</div>

				{alternativeButtons}
			</div>
		</Fragment>
	);
}