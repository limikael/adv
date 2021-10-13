import StoryPredicate from "./StoryPredicate.mjs";

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

		let predicate=this.story.evalClause(current.goto,StoryPredicate.succeed());

		if (predicate.getMessage())
			this.story.currentMessage=predicate.getMessage();

		if (predicate.getOutcome()) {
			let dest=this.story.getObjectById(object.id);
			let destPredicate=this.story.evalClause(dest.enter,StoryPredicate.succeed());

			if (destPredicate.getMessage())
				this.story.currentMessage=destPredicate.getMessage();

			if (destPredicate.getOutcome())
				this.story.currentLocationId=object.id;
		}
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

		object.have_looked_at=true;

		this.story.message(object.description);
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

		let def=StoryPredicate.succeed("It is not useful.");
		let predicate=this.story.evalClause(object.use,def);

		if (predicate.getMessage())
			this.story.currentMessage=predicate.getMessage();

		if (predicate.getOutcome()) {
			object.using=true;
			object.have_used=true;
		}
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

		let def=StoryPredicate.succeed("Taken.");
		let predicate=this.story.evalClause(object.pickup,def);

		if (predicate.getMessage())
			this.story.currentMessage=predicate.getMessage();

		if (predicate.getOutcome())
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

		let def=StoryPredicate.succeed("Dropped.");
		let predicate=this.story.evalClause(object.drop,def);

		if (predicate.getMessage())
			this.story.currentMessage=predicate.getMessage();

		if (predicate.getOutcome()) {
			object.using=false;
			object.location=this.story.currentLocationId;
		}
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