class StoryVerb {
	constructor() {
	}

	setStory(story) {
		this.story=story;
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

class LookatVerb extends StoryVerb {
	constructor() {
		super();
		this.id="lookat";
		this.label="LOOK AT";
	}

	execute(object) {
		if (object.type!="thing" || !object.description) {
			this.story.message("Nothing interesting about it.");
			return;
		}

		if (this.story.runClause(object.lookat)) {
			if (object.description)
				this.story.message(object.description);
		}
	}
}

class UseVerb extends StoryVerb {
	constructor() {
		super();
		this.id="use";
		this.label="USE";
	}

	execute(object) {
		if (object.type!="thing") {
			this.story.message("Can't use that");
			return;
		}

		this.story.runClause(object.use);
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

export function createVerbs(story) {
	let classes=[
		GotoVerb, LookatVerb, UseVerb,
		PickupVerb, DropVerb
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