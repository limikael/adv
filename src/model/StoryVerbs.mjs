import StoryException from "./StoryException.mjs";

class StoryVerb {
	constructor() {
	}

	setStory(story) {
		this.story=story;
	}

	async evalAndCheck(clause) {
		let res=await this.story.evalAsyncClause(clause);
		if (res instanceof StoryException)
			return false;

		if (typeof res=="string" || res instanceof String)
			await this.story.message(res);

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

		if (await this.evalAndCheck(object[this.id])) {
			if (!object.appliedVerbs.includes(this.id))
				object.appliedVerbs.push(this.id);
		}
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

		if (current.id!=object.id)
			if (!await this.evalAndCheck(current.leave))
				return;

		if (object.type=="thing") {
			await this.story.evalAsyncClause(object.goto);
		}

		else {
			if (!await this.evalAndCheck(object.enter))
				return;

			if (!object.appliedVerbs.includes(this.id))
				object.appliedVerbs.push(this.id);

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

		if (!object.appliedVerbs.includes(this.id))
			object.appliedVerbs.push(this.id);

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

		if (!object.appliedVerbs.includes(this.id))
			object.appliedVerbs.push(this.id);

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

class OpenVerb extends SimpleClauseVerb {
	constructor() {
		super();
		this.id="open";
		this.label="OPEN";
	}
}

class CloseVerb extends SimpleClauseVerb {
	constructor() {
		super();
		this.id="close";
		this.label="CLOSE";
	}
}

export function createVerbs() {
	let classes=[
		GotoVerb, LookatVerb, UseVerb,
		PickupVerb, DropVerb, TalktoVerb,
		OpenVerb, CloseVerb
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