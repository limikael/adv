export default class StoryPredicate {
	constructor(succeed, message) {
		this.succeed=succeed;
		this.message=message;
	}

	isPossible() {
		return this.succeed;
	}

	getMessage() {
		return this.message;
	}

	static can(message) {
		return new StoryPredicate(true,message);
	}

	static cant(message) {
		return new StoryPredicate(false,message);
	}
}