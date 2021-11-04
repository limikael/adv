import StoryException from "./StoryException.mjs";

class StoryVerb {
	constructor() {
	}

	setStory(story) {
		this.story=story;
	}

	async evalAndCheck(clause) {
		let res=await this.story.yaMachine.evalAsync(clause);
		if (res instanceof StoryException)
			return false;

		return true;
	}
}

class SimpleClauseVerb extends StoryVerb {
	constructor() {
		super();
	}

	async execute(object) {
		if (object.type!="thing") {
			this.story.message("Can't do that");
			return;
		}

		return await this.story.yaMachine.evalAsync(object[this.id]);
	}
}

class GotoVerb extends StoryVerb {
	constructor() {
		super();
		this.id="goto";
		this.label="GO TO";
	}

	async execute(object) {
		let current=this.story.getCurrentLocation();

		if (!await this.evalAndCheck(current.leave))
			return;

		if (object.type=="thing") {
			await this.story.yaMachine.evalAsync(object.goto);
		}

		else {
			if (!await this.evalAndCheck(object.enter))
				return;

			this.story.currentLocationId=object.id;
		}
	}
}

class PickupVerb extends StoryVerb {
	constructor() {
		super();
		this.id="pickup";
		this.label="PICK UP";
	}

	async execute(object) {
		if (object.type!="thing") {
			await this.story.message("Can't pick that up");
			return;
		}

		if (!await this.evalAndCheck(object.pickup))
			return;

		object.location="inventory";
	}
}

class DropVerb extends StoryVerb {
	constructor() {
		super();
		this.id="drop";
		this.label="DROP";
	}

	async execute(object) {
		if (object.type!="thing") {
			await this.story.message("Can't drop that.");
			return;
		}

		if (!await this.evalAndCheck(object.drop))
			return;

		object.location=this.story.currentLocationId;
	}
}

class LookatVerb extends SimpleClauseVerb {
	constructor() {
		super();
		this.id="lookat";
		this.label="LOOK AT";
	}
}

class UseVerb extends SimpleClauseVerb {
	constructor() {
		super();
		this.id="use";
		this.label="USE";
	}
}

class TalktoVerb extends SimpleClauseVerb {
	constructor() {
		super();
		this.id="talkto";
		this.label="TALK TO";
	}
}

export function createVerbs() {
	let classes=[
		GotoVerb, LookatVerb, UseVerb,
		PickupVerb, DropVerb, TalktoVerb
	];

	let verbs=[];
	for (let cls of classes) {
		let verb=new cls();
		if (!verb.id)
			throw new Error("Verb doesn't have an id");
		verbs.push(verb);
	}

	return verbs;
}