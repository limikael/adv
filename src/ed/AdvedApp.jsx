import {useModel} from "../utils/react-util.js";
import AdvedView from "./AdvedView.jsx";
import AdvedModel from "./AdvedModel.mjs";

export default function AdvedApp(props) {
	let model=useModel(AdvedModel,props);

	return (
		<AdvedView model={model}/>
	);
}
