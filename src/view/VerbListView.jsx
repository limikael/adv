import {emStyle} from "../utils/ReactUtil.jsx";

export default function VerbListView(props) {
	let verbButtons=[];
	let i=0;
	let disabled=props.state.story.isAlertShowing();

	for (let verb of props.state.story.getVerbs()) {
		let cls="bg-info adv-bx text-center text-white adv-btn ";
		if (props.state.currentVerb==verb.id)
			cls+=" active";

		verbButtons.push(
			<button style={emStyle(0,i*2,7,2)}
					class={cls}
					onclick={props.state.toggleCurrentVerb.bindArgs(verb.id)}
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