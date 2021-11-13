import AceEditor from "react-ace";
import AdvedMenuView from "./AdvedMenuView.jsx";
import Split from "react-split";
import {useRef,useLayoutEffect} from "react";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/ext-searchbox";

export default function AdvedView(props) {
	let iframeRef=useRef();
	let fileInputRef=useRef();

	useLayoutEffect(()=>{
		props.model.setGameFrame(iframeRef.current);
	});

	async function onButtonClick() {
		let f=await selectAndLoadFile();
		console.log("f: "+f);
	}

	return (
		<div class="adved-view">
			<AdvedMenuView model={props.model}/>
			<Split class="adved-split" sizes={[67,33]}>
				<div style={{width: "100%"}}>
					<AceEditor
						mode="yaml"
						theme="vibrant_ink"
						name="UNIQUE_ID_OF_DIV"
						width="100%"
						height="100%"
						editorProps={{ $blockScrolling: true }}
						value={props.model.getSource()}
						onChange={props.model.dispatcher("setSource")}
					/>
				</div>
				<div style={{width: "100%"}}>
					<iframe src="advide-game.html" class="adved-game-iframe" ref={iframeRef}/>
				</div>
			</Split>
		</div>
	);
}
