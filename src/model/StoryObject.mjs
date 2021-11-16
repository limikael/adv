export default class StoryObject {
	constructor(spec) {
		if (!spec ||
				typeof spec != 'object' ||
				spec.constructor !== Object) {
			let e=new Error("This is not a proper object spec.");
			e.range=spec.__range;
			throw e;
		}

		this.type=Object.keys(spec)[0];
		this.id=spec[this.type];

		if (!this.id) {
			let e=new Error("Object doesn't have an id.");
			e.range=spec.__range;
			throw e;
		}

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
					goto: {fail: "Can't do that"},
					open: {fail: "Doesn't make sense"},
					close: {fail: "Doesn't make sense"}
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

				this.appliedVerbs=[];
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
				let e=new Error("Unknown story object type: "+this.type);
				e.range=spec.__range;
				throw e;
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
			if (!defaults.hasOwnProperty(k) &&
					k!="__range" &&
					k!="__keyRanges") {
				let e=new Error("Unknown property: '"+k+"' for "+this.type+".");
				e.range=spec.__keyRanges[k];
				throw e;
			}
	}

	setStory(story) {
		this.story=story;

		if (this.type=="location") {
			for (let i in this.things)
				this.things[i].setStory(story);
		}
	}

	assertType(types) {
		if (!Array.isArray(types))
			types=[types];

		if (!types.includes(this.type))
			throw new Error(this.id+" is a "+this.type+", not a "+types);
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
		return await this.story.evalAsyncClause(this.do);
	}
}