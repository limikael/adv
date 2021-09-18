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
			<Box pos={[0,i*2]}
					size={[7,2]}
					ocls={ocls} border="white" icls="text-center" text="white" bg="info"
					onclick={props.state.toggleCurrentVerb.bindArgs(verb)}>
				{verbs[verb]}
			</Box>
		);

		i++;
	}

	return (
		<Fragment>
			<Box pos={[0,18]} size={[8,11]} bg="background" border="white">
				{verbButtons}
			</Box>
		</Fragment>
	);
}