export default class StoryObject {
	constructor(spec) {
		for (let key in spec)
			this[key]=spec[key];

		if (this.thing) {
			this.type="thing";
			this.id=this.thing;
		}

		else if (this.location) {
			this.type="location";
			this.id=this.location;

			if (!this.destinations)
				this.destinations=[];
		}

		else if (this.state) {
			this.type="state";
			this.id=this.state;
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
}