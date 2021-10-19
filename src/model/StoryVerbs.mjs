class StoryVerb {
	constructor() {
	}

	setStory(story) {
		this.story=story;
	}
}

class SimpleClauseVerb extends StoryVerb {
	constructor() {
		super();
	}

	execute(object) {
		if (object.type!="thing") {
			this.story.message("Can't do that");
			return;
		}

		this.story.runClause(object[this.id]);
	}
}

class GotoVerb extends StoryVerb {
	constructor() {
		super();
		this.id="goto";
		this.label="GO TO";
	}

	execute(object) {
		if (object.type!="location") {
			this.story.message("Can't go there");
			return;
		}

		let current=this.story.getCurrentLocation();

		if (!current.destinations.includes(object.id)) {
			this.story.message("Can't go there");
			return;
		}

		if (this.story.runClause(current.leave) &&
				this.story.runClause(object.enter))
			this.story.currentLocationId=object.id;
	}
}

class PickupVerb extends StoryVerb {
	constructor() {
		super();
		this.id="pickup";
		this.label="PICK UP";
	}

	execute(object) {
		if (object.type!="thing") {
			this.story.message("Can't pick that up");
			return;
		}

		if (this.story.runClause(object.pickup))
			object.location="inventory";
	}
}

class DropVerb extends StoryVerb {
	constructor() {
		super();
		this.id="drop";
		this.label="DROP";
	}

	execute(object) {
		if (object.type!="thing") {
			this.story.message("Can't drop that.");
			return;
		}

		if (this.story.runClause(object.drop))
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