export default class StoryHistory {
	constructor() {
		this.actions=[];
	}

	addAction(action, value) {
		this.actions.push({
			action: action,
			value: value
		});
	}

	async apply(story) {
		await story.applyActions(this.actions);
	}
}