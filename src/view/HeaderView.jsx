import {emStyle, useCountUp} from "../utils/react-util.js";

export default function HeaderView(props) {
	let countScore=Math.round(useCountUp(props.model.story.getCompletePercentage(),true));

	return (
		<Fragment>
			<div style={emStyle(0,0,19,2)} class="adv-bx bg-black" />
			<div style={emStyle(0,0,19,2)} class="adv-bx adv-btn bg-black text-white text-center">
				{props.model.story.getName()}
			</div>
			<div style={emStyle(0,0,2,2)} class="adv-bx text-center text-white adv-btn">
				<div class="bi bi-three-dots-vertical"></div>
			</div>
			<div style={emStyle(14,0,5,2)} class="adv-bx text-end text-white">
				{countScore}%
			</div>
		</Fragment>
	);
}
