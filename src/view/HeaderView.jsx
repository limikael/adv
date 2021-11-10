import {emStyle, useCountUp} from "../utils/react-util.js";

export default function HeaderView(props) {
	let percentage=0;
	let name="Advide Game";

	if (props.model.story && !props.model.getError()) {
		name=props.model.story.getName();
		percentage=props.model.story.getCompletePercentage();
	}

	let countScore=Math.round(useCountUp(percentage,true));
	if (countScore)
		countScore=countScore+"%";

	else
		countScore="";

	return (
		<Fragment>
			<div style={emStyle(0,0,19,2)} class="adv-bx bg-black" />
			<div style={emStyle(0,0,19,2)} class="adv-bx adv-btn bg-black text-white text-center">
				{name}
			</div>
			<a style={emStyle(0,0,2,2)} class="adv-bx text-center text-white adv-btn adv-menu-button"
					onclick={props.model.dispatcher("toggleMenu")}>
				<div class="bi bi-three-dots-vertical"></div>
			</a>
			<div style={emStyle(14,0,5,2)} class="adv-bx text-end text-white">
				{countScore}
			</div>
		</Fragment>
	);
}
