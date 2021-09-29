import StoryObject from "./StoryObject.mjs";
import StoryPredicate from "./StoryPredicate.mjs";
import YaMachine from "../utils/YaMachine.mjs";

export default class Story {
	constructor(spec) {
		this.spec=spec;

		let functions={
			have: (id)=>this.getThingById(id).location=="inventory",
			in: (id)=>this.getCurrentLocation().id==id,
			seen: (id)=>this.getThingById(id).have_looked_at,
			using: (id)=>this.getThingById(id).using,
			used: (id)=>this.getThingById(id).have_used,
			fail: (message)=>StoryPredicate.fail(message),
			succeed: (message)=>StoryPredicate.succeed(message),
		};

		this.yamachine=new YaMachine();
		for (let f in functions)
			this.yamachine.addFunction(f,functions[f].bind(this));

		this.restart();
	}

	restart=()=>{
		let spec=JSON.parse(JSON.stringify(this.spec));

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

	getThingById(id) {
		let o=this.getObjectById(id);
		o.assertType("thing");

		return o;
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

		let predicate=this.evalClause(current.goto,StoryPredicate.succeed());

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.getOutcome()) {
			let dest=this.getObjectById(object.id);
			let destPredicate=this.evalClause(dest.enter,StoryPredicate.succeed());

			if (destPredicate.getMessage())
				this.currentMessage=destPredicate.getMessage();

			if (destPredicate.getOutcome())
				this.currentLocationId=object.id;
		}
	}

	lookat(object) {
		if (object.type!="thing" || !object.description) {
			this.message("Nothing interesting about it.");
			return;
		}

		object.have_looked_at=true;

		this.message(object.description);
	}

	use(object) {
		if (object.type!="thing") {
			this.message("Can't use that");
			return;
		}

		let def=StoryPredicate.succeed("It is not useful.");
		let predicate=this.evalClause(object.use,def);

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.getOutcome()) {
			object.using=true;
			object.have_used=true;
		}
	}

	pickup(object) {
		if (object.type!="thing") {
			this.message("Can't pick that up");
			return;
		}

		let def=StoryPredicate.succeed("Taken.");
		let predicate=this.evalClause(object.pickup,def);

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.getOutcome())
			object.location="inventory";
	}

	drop(object) {
		if (object.type!="thing") {
			this.message("Can't drop that.");
			return;
		}

		let def=StoryPredicate.can("Dropped.");
		let predicate=this.evalClause(object.drop,def);

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.getOutcome()) {
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

	getThingsByCurrentLocation() {
		let current=this.getCurrentLocation();
		let res=[];

		for (let object of this.objects) {
			if (object.type=="thing" &&
					object.location==current.id)
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
			if (object.type=="thing" &&
					object.location=="inventory")
				res.push(object);
		}

		return res;
	}

	evalClause(clause, defaultValue) {
		let v=defaultValue;

		if (clause!==undefined)
			v=this.yamachine.preprocessAndEval(clause);

		v=StoryPredicate.of(v);

		return v;
	}

	getStoryCompleteMessage() {
		let o=this.getObjectById("complete");
		if (!o)
			return null;

		let p=this.evalClause(o.clause,StoryPredicate.cant());

		if (p.getOutcome())
			return p.getMessage();
	}

	isAlertShowing() {
		return (this.getMessage() || this.getStoryCompleteMessage());
	}
}