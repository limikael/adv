export function toggleCurrentVerb(state, verb) {
	if (state.currentVerb==verb)
		state.currentVerb=null;

	else
		state.currentVerb=verb;

	return state;
}