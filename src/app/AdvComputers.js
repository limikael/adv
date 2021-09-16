export function getCurrentLocation(state) {
	return state.story[state.location];
}

export function getObjectById(state, id) {
	return state.story[id];
}

export function getThingsByLocation(state, location) {
	let res=[];

	for (let id in state.story) {
		let object=state.story[id];
		if (object.location==location)
			res.push(object);
	}

	return res;
}

export function getDestinationsByLocation(state, location) {
	if (!state.story[location].destinations)
		return [];

	let res=[];
	for (let id of state.story[location].destinations)
		res.push(state.story[id]);

	return res;
}