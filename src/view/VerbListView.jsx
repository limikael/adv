import {emStyle} from "../utils/react-util.js";

export default function VerbListView(props) {
	let verbButtons=[];
	let i=0;
	let disabled=false;

	if (props.model.story.getMessage())
		disabled=true;

	for (let verb of props.model.story.getVerbs()) {
		let cls="bg-info adv-bx text-center text-white adv-btn ";
		if (props.model.currentVerb==verb.id)
			cls+=" active";

		verbButtons.push(
			<button style={emStyle(0,i*2,7,2)}
					class={cls}
					onclick={props.model.dispatcher("toggleCurrentVerb",verb.id)}
					disabled={disabled}>
				{verb.label}
			</button>
		);

		i++;
	}

	return (
		<div style={emStyle(0,18,8,11)} class="bg-body adv-bx">
			{verbButtons}
		</div>
	);
}