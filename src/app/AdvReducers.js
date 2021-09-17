export function toggleCurrentVerb(state, verb) {
	if (state.currentVerb==verb)
		state.currentVerb=null;

	else
		state.currentVerb=verb;

	return state;
}

export function objectClick(state, id) {
	state.story.execute(state.currentVerb,id);

	state.currentVerb=null;

	return state;
}