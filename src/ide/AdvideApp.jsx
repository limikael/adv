import {useModel} from "../utils/react-util.js";
import AdvideView from "./AdvideView.jsx";
import AdvideModel from "./AdvideModel.mjs";

export default function AdvideApp(props) {
	let model=useModel(AdvideModel,props);

	return (
		<AdvideView model={model}/>
	);
}
