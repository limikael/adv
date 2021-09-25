import {useRef, useLayoutEffect} from "react";
import {useIsValueChanged, emStyle, accessibleLinkProps} from "../utils/ReactUtil.jsx";

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
	let changed=useIsValueChanged(props.state.story.currentLocationId);
	let text=[];

	useLayoutEffect(()=>{
		if (changed)
			ref.current.scrollTop=0;
	});

	text.push(<p>{props.state.story.getCurrentLocation().description}</p>);

	let accessible=null;
	if (props.state.currentVerb)
		accessible=accessibleLinkProps();

	let things=props.state.story.getThingsByCurrentLocation();
	if (things.length) {
		function linkThing(thing) {
			return (
				<a onclick={props.state.objectClick.bindArgs(thing.id)}
						{...accessible}>
					{thing.getStageName()}
				</a>
			);
		}

		text.push(<p>There is {enumerate(things.map(linkThing))} here.</p>);
	}

	let destinations=props.state.story.getDestinationsByCurrentLocation();
	if (destinations.length) {
		function linkDest(dest) {
			return (
				<a onclick={props.state.objectClick.bindArgs(dest.id)}
						{...accessible}>
					{dest.getStageName()}
				</a>
			);
		}

		text.push(<p>
			You can reach {enumerate(destinations.map(linkDest))} from here.
		</p>);
	}

	let cls="adv-location-description ";
	if (props.state.currentVerb)
		cls+="adv-verb-selected";

	return (
		<div style={emStyle(0,0,19,18)} class="adv-bx bg-white text-black">
			<div style={emStyle(0,0,18,17)} class={cls} ref={ref}>
				{text}
			</div>
		</div>
	);
}