import StoryObject from "./StoryObject.mjs";

export default class Story {
	constructor(spec) {
		this.objects=[];

		for (let objectSpec of spec) {
			let o=new StoryObject(objectSpec);
			o.setStory(this);
			this.objects.push(o);
		}

		this.currentLocationId=this.objects[0].id;
		this.currentMessage=null;
	}

	getObjectById(id) {
		for (let object of this.objects)
			if (object.id==id)
				return object;

		return null;
	}

	getCurrentLocation() {
		return this.getObjectById(this.currentLocationId);
	}

	execute(verbId, objectId) {
		let o=this.getObjectById(objectId);

		switch (verbId) {
			case "goto":
				this.goto(o);
				break;

			case "use":
				this.use(o);
				break;

			case "pickup":
				this.pickup(o);
				break;

			case "lookat":
				this.lookat(o);
				break;

			default:
				throw new Error("Unknown verb");
				break;
		}
	}

	goto(object) {
		if (object.type!="location") {
			this.message("Can't go there");
			return;
		}

		let current=this.getCurrentLocation();

		if (!current.destinations[object.id]) {
			this.message("Can't go there");
			return;
		}

		let v=current.destinations[object.id];

		if (v===true) {
			this.currentLocationId=object.id;
			return;
		}

		if (v(this)) {
			this.currentLocationId=object.id;
			return;
		}
	}

	lookat(object) {
		if (object.type!="thing" || !object.description) {
			this.message("Can't see that");
			return;
		}

		this.message(object.description);
	}

	use(object) {
		if (object.type!="thing") {
			this.message("Can't use that");
			return;
		}

		if (object.use(this))
			object.using=true;
	}

	pickup(object) {
		if (object.type!="thing") {
			this.message("Can't pick that up");
			return;
		}

		let v=true;
		if (object.pickup)
			v=object.pickup(this);

		if (v) {
			if (!this.currentMessage)
				this.currentMessage="Taken.";

			object.location="inventory";
		}
	}

	message(message) {
		this.currentMessage=message;
	}

	getMessage() {
		return this.currentMessage;
	}

	dismissMessage() {
		this.currentMessage=null;
	}

	is(id) {
		let o=this.getObjectById(id);
		if (!o || o.type!="state")
			throw new Error("Not a state: "+id);

		return o.state;
	}

	has(id) {
		let o=this.getObjectById(id);
		if (!o || o.type!="thing")
			throw new Error("Not a thing: "+id);

		return o.location=="inventory";
	}

	set(id) {
		let o=this.getObjectById(id);
		if (!o || o.type!="state")
			throw new Error("Not a state: "+id);

		o.state=true;
	}

	using(id) {
		let o=this.getObjectById(id);
		if (!o || o.type!="thing")
			throw new Error("Not a thing: "+id);

		return o.using;
	}

	getThingsByCurrentLocation() {
		let current=this.getCurrentLocation();
		let res=[];

		for (let object of this.objects) {
			if (object.location==current.id)
				res.push(object);
		}

		return res;
	}

	getDestinationsByCurrentLocation() {
		let current=this.getCurrentLocation();
		let res=[];

		for (let id in current.destinations)
			res.push(this.getObjectById(id));

		return res;
	}

	getInventoryThings() {
		let res=[];

		for (let object of this.objects) {
			if (object.location=="inventory")
				res.push(object);
		}

		return res;
	}
}