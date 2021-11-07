import {emStyle, useCountUp} from "../utils/react-util.js";

export default function HeaderView(props) {
	let countScore=Math.round(useCountUp(props.model.story.getCompletePercentage(),true));

	return (
		<Fragment>
			<div style={emStyle(0,0,19,2)} class="adv-bx bg-black" />
			<div style={emStyle(0,0,19,2)} class="adv-bx adv-btn bg-black text-white text-center">
				{props.model.story.getName()}
			</div>
			<a style={emStyle(0,0,2,2)} class="adv-bx text-center text-white adv-btn adv-menu-button"
					onclick={props.model.dispatcher("toggleMenu")}>
				<div class="bi bi-three-dots-vertical"></div>
			</a>
			<div style={emStyle(14,0,5,2)} class="adv-bx text-end text-white">
				{countScore}%
			</div>
		</Fragment>
	);
}
