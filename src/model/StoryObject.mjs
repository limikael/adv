export default class StoryObject {
	constructor(spec) {
		this.type=Object.keys(spec)[0];
		this.id=spec[this.type];

		switch (this.type) {
			case "thing":
				this.applySpec(spec,{
					thing: null,
					description: "There is a ["+spec.thing+"] here.",
					use: {fail: "Can't do that"},
					talkto: {fail: "Can't do that"},
					location: null,
					drop: "Dropped",
					pickup: "Taken",
					lookat: "Nothing interesting about it",
					name: spec.thing,
					exists: true,
					goto: {fail: "Can't do that"}
				});

				this.appliedVerbs=[];
				break;

			case "location":
				this.applySpec(spec,{
					name: spec.location,
					location: null,
					description: "you are in "+spec.location,
					enter: true,
					leave: true,
					header: null
				});
				break;

			case "state":
				this.value=spec.value;
				break;

			case "def":
				this.applySpec(spec,{
					def: null,
					do: null
				});
				break;

			default:
				throw new Error("Unknown story object type: "+this.type);
		}
	}

	getHeader() {
		return this.story.evalClause(this.header);
	}

	applySpec(spec, defaults) {
		for (let k in defaults) {
			if (spec.hasOwnProperty(k))
				this[k]=spec[k];

			else
				this[k]=defaults[k];
		}

		for (let k in spec)
			if (!defaults.hasOwnProperty(k))
				throw new Error("Unknown property: "+k);
	}

	setStory(story) {
		this.story=story;

		if (this.type=="location") {
			for (let i in this.things)
				this.things[i].setStory(story);
		}
	}

	assertType(type) {
		if (this.type!=type)
			throw new Error(this.id+" is a "+this.type+", not a "+type);
	}

	getName() {
		return this.story.yaMachine.evalSync(this.name);
	}

	getAlternatives() {
		let res=[];

		for (let i in this.alternatives) {
			let alternative=this.alternatives[i];
			alternative.index=i;

			let use=true;
			if (alternative.exists)
				if (!this.story.evalClause(alternative.exists))
					use=false;

			if (use)
				res.push(alternative)
		}

		return res;
	}

	getAlternative(index) {
		return this.alternatives[index];
	}

	setValue(value) {
		this.assertType("state");
		this.value=value;
	}

	getValue() {
		this.assertType("state");
		return this.story.evalClause(this.value);
	}

	async run() {
		this.assertType("def");
		return await this.story.yaMachine.evalAsync(this.do);
	}
}