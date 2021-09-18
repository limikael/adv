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

			case "drop":
				this.drop(o);
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

		if (!current.destinations.includes(object.id)) {
			this.message("Can't go there");
			return;
		}

		let effect=current.evalVerb("goto",[true]);

		if (effect[1])
			this.currentMessage=effect[1];

		if (effect[0])
			this.currentLocationId=object.id;
	}

	lookat(object) {
		if (object.type!="thing" || !object.description) {
			this.message("Nothing interesting about it.");
			return;
		}

		this.message(object.description);
	}

	use(object) {
		if (object.type!="thing") {
			this.message("Can't use that");
			return;
		}

		let effect=object.evalVerb("use",this.cant("It is not useful."));

		if (effect[1])
			this.currentMessage=effect[1];

		if (effect[0])
			object.using=true;
	}

	pickup(object) {
		if (object.type!="thing") {
			this.message("Can't pick that up");
			return;
		}

		let effect=object.evalVerb("pickup",this.can("Taken."));

		if (effect[1])
			this.currentMessage=effect[1];

		if (effect[0])
			object.location="inventory";
	}

	drop(object) {
		if (object.type!="thing") {
			this.message("Can't drop that.");
			return;
		}

		let effect=object.evalVerb("drop",this.can("Dropped."));

		if (effect[1])
			this.currentMessage=effect[1];

		if (effect[0]) {
			object.using=false;
			object.location=this.currentLocationId;
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

		for (let id of current.destinations)
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

	can(message) {
		return [true,message];
	}

	cant(message) {
		return [false,message];
	}
}