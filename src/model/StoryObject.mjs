export default class StoryObject {
	constructor(spec) {
		this.type=Object.keys(spec)[0];
		this.id=spec[this.type];

		switch (this.type) {
			case "thing":
				this.description=spec.description;
				this.use=spec.use;
				this.location=spec.location;
				this.pickup=spec.pickup;
				this.stage_name=spec.stage_name;
				this.inventory_name=spec.inventory_name;
				break;

			case "location":
				this.description=spec.description;
				this.destinations=spec.destinations||[];
				this.enter=spec.enter;
				this.goto=spec.goto;
				break;

			case "choice":
				this.description=spec.description;
				this.alternatives=spec.alternatives;
				break;

			default:
				throw new Error("Unknown story object type: "+this.type);
		}
	}

	setStory(story) {
		this.story=story;
	}

	assertType(type) {
		if (this.type!=type)
			throw new Error(this.id+" is a "+this.type+", not a "+type);
	}

	getInventoryName() {
		if (this.inventory_name)
			return this.story.yaMachine.preprocessAndEval(this.inventory_name);

		else
			return this.id;
	}

	getStageName() {
		if (this.stage_name)
			return this.story.yaMachine.preprocessAndEval(this.stage_name);

		else
			return this.id;
	}

	getAlternatives() {
		return this.alternatives;
	}
}