import {useRef, useLayoutEffect} from "react";
import {useIsValueChanged, emStyle, accessibleLinkProps} from "../utils/react-util.js";
import {linkify} from "../utils/WebUtil.mjs";

function enumerate(strings) {
	let text=[];

	for (let i=0; i<strings.length; i++) {
		let string=strings[i];

		if (i==0)
			text.push(string);

		else if (i<strings.length-1) {
			text.push(", ");
			text.push(string);
		}

		else {
			text.push(" and ");
			text.push(string);
		}
	}

	return text;
}

export default function LocationView(props) {
	let ref=useRef();
	let changed=useIsValueChanged(props.model.story.currentLocationId);
	let text=[];

	useLayoutEffect(()=>{
		if (changed)
			ref.current.scrollTop=0;
	});

	function storyLink(objectId) {
		let object=props.model.story.getObjectById(objectId);

		if (!object)
			throw new Error("Unknown object: "+objectId);

		let accessible=null;
		if (props.model.currentVerb)
			accessible=accessibleLinkProps();

		return (
			<a onclick={props.model.dispatcher("objectClick",object.id)}
					{...accessible}>
				{object.getName()}
			</a>
		);
	}


	if (!props.model.story.getCurrentChoice()) {
		let descs=props.model.story.getCurrentLocationDescriptions();

		for (let desc of descs) {
			desc=desc.toString();//console.log("linkify: "+desc);
			text.push(<p>{linkify(desc,storyLink)}</p>);
		}

		let things=props.model.story.getThingsByCurrentLocation();
		for (let thing of things) {
			let desc=props.model.story.evalClause(thing.description);

			if (desc)
				text.push(<p>{linkify(desc,storyLink)}</p>);
		}
	}

	let cls="adv-bx bg-white text-black adv-location-description ";
	if (props.model.currentVerb)
		cls+="adv-verb-selected";

	return (
		<Fragment>
			<div style={emStyle(0,2,19,16)} class="adv-bx bg-white"/>

			<div style={emStyle(0.25,2,18.5,16)} class={cls} ref={ref}>
				{text}
			</div>
		</Fragment>
	);
}