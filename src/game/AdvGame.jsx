import ContentScaler from "../utils/ContentScaler.jsx";
import AdvView from "../view/AdvView.jsx";
import {emAppStyle, useModel, useWindowEventListener} from "../utils/react-util.js";
import AdvModel from "../model/AdvModel.js";
import "./AdvGame.css";
import {useErrorBoundary} from "preact/hooks";
import ErrorView from "../view/ErrorView.jsx";

export default function AdvGame(props) {
	let model=useModel(AdvModel,props);
	let [error, resetError]=useErrorBoundary();

	useWindowEventListener("message",(ev)=>{
		switch (ev.data) {
			case "refresh":
				model.refresh();
				resetError();
				break;

			case "restart":
				model.restart();
				resetError();
				break;
		}
	});

	if (model.getError())
		error=model.getError()

	return (
		<ContentScaler width="200" height="300">
			<div class="adv-main">
				<div style={emAppStyle()}>
					<AdvView model={model} error={error}/>
				</div>
			</div>
		</ContentScaler>
	);
}