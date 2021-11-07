import ContentScaler from "../utils/ContentScaler.jsx";
import AdvView from "../view/AdvView.jsx";
import {emAppStyle, useModel} from "../utils/react-util.js";
import AdvModel from "../model/AdvModel.js";
import "./AdvGame.css";

export default function AdvGame(props) {
	let model=useModel(AdvModel,props);

	return (
		<ContentScaler width="200" height="300">
			<div class="adv-main">
				<div style={emAppStyle()}>
					<AdvView model={model}/>
				</div>
			</div>
		</ContentScaler>
	);
}