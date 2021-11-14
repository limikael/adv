import {useModel} from "../utils/react-util.js";
import AdvideView from "./AdvideView.jsx";
import AdvideModel from "./AdvideModel.mjs";

import "./AdvideApp.css";

export default function AdvideApp(props) {
	let model=useModel(AdvideModel,props);

	/*async function test() {
		let [handle]=await window.showOpenFilePicker();
		let file=await handle.getFile();
		let content=await file.text();
		console.log(content);
	}*/

	return (
		<AdvideView model={model}/>
	);
}
