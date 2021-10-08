import {emStyle} from "../utils/ReactUtil.jsx";

export default function HeaderView(props) {
	return (
		<Fragment>
			<div style={emStyle(0,0,19,2)} class="adv-bx" />
			<div style={emStyle(0.75,-0.5,19,2)}>
				{props.state.story.getName()}
			</div>
			<div style={emStyle(-0.5,-0.5,2,2)} class="adv-bx text-center text-white bg-transparent adv-btn">
				<div class="bi bi-three-dots-vertical"></div>
			</div>
			<div style={emStyle(14.25,-0.5,5,2)} class="text-end">
				{props.state.story.getCompletePercentage()}%
			</div>
		</Fragment>
	);
}
