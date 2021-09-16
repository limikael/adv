import {h, render} from 'preact';
import {useEffect, useState, useRef, useContext} from 'preact/hooks';
import {createContext} from "react";
import "./ContentScaler.css";

export default function ContentScaler(props) {
	const [windowSize,setWindowSize]=useState({width: 0, height: 0});

	let ref=useRef();

	useEffect(()=>{
		let oldWidth=null;

		function updateSize() {
			//console.log("SIZE: "+ref.current.clientWidth+"x"+ref.current.clientHeight);
			let tagName=null;
			if (document.activeElement)
				tagName=document.activeElement.tagName;

			if (ref.current.clientWidth!=oldWidth ||
					tagName!="INPUT") {

				oldWidth=ref.current.clientWidth;

				if (tagName=="INPUT")
					document.activeElement.blur()

				setWindowSize({
					width: ref.current.clientWidth,
					height: ref.current.clientHeight
				});
			}
		}

		updateSize();
		let resizeObserver=new ResizeObserver(updateSize);
		resizeObserver.observe(ref.current);

		return ()=>{
			resizeObserver.disconnect();
		}
	},[]);

	let useWidth=props.width;
	let useHeight=props.height;
	let orientation="landscape"

	if (windowSize.height>windowSize.width) {
		useWidth=props.portraitWidth||props.width;
		useHeight=props.portraitHeight||props.height;
		orientation="portrait";
	}

	let scale;
	if (windowSize.width / useWidth < windowSize.height / useHeight)
		scale = windowSize.width / useWidth;

	else
		scale = windowSize.height / useHeight;		

	let scaledWidth = useWidth * scale;
	let scaledHeight = useHeight * scale;		
	let posX = (windowSize.width - scaledWidth) / 2;
	let posY = (windowSize.height - scaledHeight) / 2;
	let transform=`translate(${posX}px,${posY}px) scale(${scale})`;

	let innerStyle={
		"width": useWidth+"px",
		"height": useHeight+"px",
		"transform": transform,
	};

	let content=props.children;
	if (!ref.current)
		content=null;

	let ctx={
		orientation: orientation,
		scale: scale
	};

	return (
		<ContentScaler.OrientationContext.Provider value={ctx}>
			<div ref={ref} class={orientation+" content-scaler-outer"}>
				<div style={innerStyle} class="content-scaler-inner">
					{content}
				</div>
			</div>
		</ContentScaler.OrientationContext.Provider>
	);
}

ContentScaler.OrientationContext=createContext();

ContentScaler.Reset=(props)=>{
	let ctx=useContext(ContentScaler.OrientationContext);

	let scale=ctx.scale;
	let oneOverScale=1/scale;

	let innerStyle={
		"width": `calc( 100% * ${scale} )`,
		"height": `calc( 100% * ${scale} )`,
		"transform": `scale(${oneOverScale})`,
		"transform-origin": "0 0"
	};

	return (
		<div class={props.class}>
			<div style={innerStyle}>
				{props.children}
			</div>
		</div>
	);
}