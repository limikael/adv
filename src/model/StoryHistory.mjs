export default class StoryHistory {
	constructor() {
		this.actions=[];
		this.futureActions=[];
	}

	addAction(action, value) {
		this.futureActions=[];

		this.actions.push({
			action: action,
			value: value
		});
	}

	undo() {
		let action=this.actions.pop();

		if (action)
			this.futureActions.push(action);
	}

	redo() {
		let action=this.futureActions.pop();

		if (action)
			this.actions.push(action);
	}

	async apply(story) {
		await story.applyActions(this.actions);
	}
}