export default class StoryObject {
	constructor(spec) {
		for (let key in spec)
			this[key]=spec[key];

		if (!this.id)
			throw new Error("Object needs an id");

		if (!this.type)
			throw new Error("Object needs a type");

		switch (this.type) {
			case "state":
				this.state=false;
				break;
		}
	}

	setStory(story) {
		this.story=story;
	}

	getInventoryName() {
		return this.id;
	}
}