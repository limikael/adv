import AceEditor from "react-ace";
import Split from "react-split";
import {useRef} from "react";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-vibrant_ink";

import "./AdvideApp.css";

export default function AdvideApp(props) {
	let iframeRef=useRef();

	window.sessionStorage.setItem("advsource","");

	function onChange(newValue) {
		window.sessionStorage.setItem("advsource",newValue);
		iframeRef.current.contentWindow.postMessage("refresh");
	}

	return (
		<Split class="advide-split" sizes={[67,33]}>
			<div style={{width: "100%"}}>
				<AceEditor
					mode="yaml"
					theme="vibrant_ink"
					onChange={onChange}
					name="UNIQUE_ID_OF_DIV"
					width="100%"
					height="100%"
					editorProps={{ $blockScrolling: true }}
				/>
			</div>
			<div style={{width: "100%"}}>
				<iframe src="advide-game.html" class="advide-game-iframe" ref={iframeRef}/>
			</div>
		</Split>
	)
}
