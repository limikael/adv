import {useModel} from "../utils/react-util.js";
import AdvideView from "./AdvideView.jsx";
import AdvideModel from "./AdvideModel.mjs";

//import {ipcRenderer} from "electron";

import "./AdvideApp.css";

/*ipcRenderer.on("message",(ev,message)=>{
	console.log("hello");
});*/

export default function AdvideApp(props) {
	let model=useModel(AdvideModel,props);

	return (
		<AdvideView model={model}/>
	);
}
