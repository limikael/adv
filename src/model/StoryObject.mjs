export default class StoryObject {
	constructor(spec) {
		this.type=Object.keys(spec)[0];
		this.id=spec[this.type];

		switch (this.type) {
			case "thing":
				this.applySpec(spec,{
					thing: null,
					description: undefined,
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
				break;

			case "location":
				this.applySpec(spec,{
					name: spec.location,
					location: null,
					description: undefined,
					enter: undefined,
					leave: undefined
				});
				break;

			case "choice":
				this.description=spec.description;
				this.alternatives=spec.alternatives;
				break;

			case "state":
				this.value=spec.value;
				break;

			default:
				throw new Error("Unknown story object type: "+this.type);
		}
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
		return this.story.yaMachine.preprocessAndEval(this.name);
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
		return this.story.evalClause(this.value);
	}
}