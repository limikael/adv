import Box from "../utils/Box.jsx";
import {useRef, useLayoutEffect} from "react";
import {useIsValueChanged} from "../utils/ReactUtil.jsx";

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

	let things=props.state.story.getThingsByCurrentLocation();

	if (things.length) {
		function linkThing(thing) {
			return (
				<a onclick={props.state.objectClick.bindArgs(thing.id)}>
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
				<a onclick={props.state.objectClick.bindArgs(dest.id)}>
					{dest.getStageName()}
				</a>
			);
		}

		text.push(<p>
			You can reach {enumerate(destinations.map(linkDest))} from here.
		</p>);
	}

	let cls="";
	if (props.state.currentVerb)
		cls="verb-selected";

	return (
		<Box pos={[0,0]} size={[19,18]} border="white" bg="light" class={cls}>
			<Box pos={[0,0]} size={[18,17]} border="none" icls="location-description" ref={ref}>
				{text}
			</Box>
		</Box>
	);
}