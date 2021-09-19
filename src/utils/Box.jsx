import "./Box.css";
import {forwardRef} from "react";

function computeBsStyles(props) {
	let style={};

	if (props.bg)
		style["background-color"]="var(--color-"+props.bg+")";

	if (props.border) {
		if (props.border=="none")
			style["border-color"]="transparent";

		else
			style["border-color"]="var(--color-"+props.border+")";
	}

	if (props.text)
		style["color"]="var(--color-"+props.text+")";

	return style;
}

export default Box=forwardRef((props,ref)=>{
	let bsStyles=computeBsStyles(props);

	let outerStyle={
		width: props.size[0]*10-10+"px",
		height: props.size[1]*10-10+"px",
		left: props.pos[0]*10+"px",
		top: props.pos[1]*10+"px",
		...bsStyles
	};

	delete bsStyles["background-color"];

	let innerStyle={
		width: props.size[0]*10-10+"px",
		height: props.size[1]*10-10+"px",
		left: "2px",
		top: "2px",
		...bsStyles
	};

	let icls=props.icls||"";
	let ocls=props.ocls||"";
	let cls=props.class||"";

	return (
		<Fragment>
			<div class={"box-outer "+cls+" "+ocls} style={outerStyle} onclick={props.onclick}>
				<div class={"box-inner "+cls+" "+icls} style={innerStyle} ref={ref}>
					{props.children}
				</div>
			</div>
		</Fragment>
	)
});
