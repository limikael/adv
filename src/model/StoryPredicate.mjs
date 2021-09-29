export default class StoryPredicate {
	constructor(outcome, message) {
		this.outcome=outcome;
		this.message=message;
	}

	getOutcome() {
		return this.outcome;
	}

	getMessage() {
		return this.message;
	}

	static succeed(message) {
		return new StoryPredicate(true,message);
	}

	static fail(message) {
		return new StoryPredicate(false,message);
	}

	static of(v) {
		if (v instanceof StoryPredicate)
			return v;

		if (typeof v=="boolean")
			return new StoryPredicate(v,null);

		if (v===undefined)
			return new StoryPredicate(false,null);

		return new StoryPredicate(true,v);
	}
}