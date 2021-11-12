import {useModel} from "../utils/react-util.js";
import AceEditor from "react-ace";
import AdvadminModel from "./AdvadminModel.js";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/ext-searchbox";

//import "./AdvideApp.css";

export default function AdvadminApp(props) {
	let model=useModel(AdvadminModel,props);

	return (
		<AceEditor
			mode="yaml"
			theme="vibrant_ink"
			name="UNIQUE_ID_OF_DIV"
			width="100%"
			height="100%"
			editorProps={{ $blockScrolling: true }}
			value={model.getSource()}
			onChange={model.dispatcher("setSource")}
		/>
	);
}
