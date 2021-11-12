import AceEditor from "react-ace";
import Split from "react-split";
import {useRef,useLayoutEffect} from "react";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-vibrant_ink";

export default function AdvideView(props) {
	let iframeRef=useRef();

	useLayoutEffect(()=>{
		props.model.setGameFrame(iframeRef.current);
	});

	return (
		<Split class="advide-split" sizes={[67,33]}>
			<div style={{width: "100%"}}>
				<AceEditor
					mode="yaml"
					theme="vibrant_ink"
					onChange={props.model.dispatcher("setSource")}
					name="UNIQUE_ID_OF_DIV"
					width="100%"
					height="100%"
					editorProps={{ $blockScrolling: true }}
					value={props.model.getSource()}
				/>
			</div>
			<div style={{width: "100%"}}>
				<iframe src="advide-game.html" class="advide-game-iframe" ref={iframeRef}/>
			</div>
		</Split>
	);
}