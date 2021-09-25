export function toggleCurrentVerb(state, verb) {
	if (state.currentVerb==verb)
		state.currentVerb=null;

	else
		state.currentVerb=verb;

	return state;
}

export function objectClick(state, id) {
	if (!state.currentVerb)
		return state;

	state.story.execute(state.currentVerb,id);

	state.currentVerb=null;

	return state;
}

export function dismissMessage(state) {
	state.story.dismissMessage();

	return state;
}

export function restart(state) {
	state.story.restart();

	return state;
}