export function toggleCurrentVerb(state, verb) {
	if (state.currentVerb==verb)
		state.currentVerb=null;

	else
		state.currentVerb=verb;

	return state;
}

export function initStory(state) {
	for (let id in state.story) {
		state.story[id].id=id;
	}

	return state;
}

export function objectClick(state, id) {
	console.log("click: "+id);

	state.currentVerb=null;

	return state;
}