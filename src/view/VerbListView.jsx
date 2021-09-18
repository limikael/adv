import Box from "../utils/Box.jsx";

export default function VerbListView(props) {
	let verbButtons=[];
	let i=0;

	let verbs=props.state.verbs;

	for (let verb in verbs) {
		let ocls="btn ";
		if (props.state.currentVerb==verb)
			ocls+=" active";

		verbButtons.push(
			<Box pos={[(i%2)*7,Math.floor(i/2)*2]}
					size={[7,2]}
					ocls={ocls} border="white" icls="text-center" text="white" bg="info"
					onclick={props.state.toggleCurrentVerb.bindArgs(verb)}>
				{verbs[verb]}
			</Box>
		);

		i++;
	}

	let actionText=null;
	if (props.state.currentVerb)
		actionText=verbs[props.state.currentVerb];

	return (
		<Fragment>
			<Box pos={[0,29]} size={[29,3]} bg="background" border="white" text="white">
				<Box border="none" pos={[0,0]} size={[28,2]}>
					{actionText}
				</Box>
			</Box>

			<Box pos={[0,32]} size={[15,7]} bg="background" border="white">
				{verbButtons}
			</Box>
		</Fragment>
	);
}