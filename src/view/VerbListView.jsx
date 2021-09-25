import {emStyle} from "../utils/ReactUtil.jsx";

export default function VerbListView(props) {
	let verbButtons=[];
	let i=0;

	let verbs=props.state.verbs;
	let disabled=props.state.story.isAlertShowing();

	for (let verb in verbs) {
		let cls="bg-info adv-bx text-center text-white adv-btn ";
		if (props.state.currentVerb==verb)
			cls+=" active";

		verbButtons.push(
			<button style={emStyle(0,i*2,7,2)}
					class={cls}
					onclick={props.state.toggleCurrentVerb.bindArgs(verb)}
					disabled={disabled}>
				{verbs[verb]}
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