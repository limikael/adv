import StoryObject from "./StoryObject.mjs";
import StoryPredicate from "./StoryPredicate.mjs";
import YaMachine from "../utils/YaMachine.mjs";
import {createVerbs} from "./StoryVerbs.mjs";

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

		this.yaMachine=new YaMachine();
		for (let f in functions)
			this.yaMachine.addFunction(f,functions[f].bind(this));

		this.verbsById={};
		for (let verb of createVerbs()) {
			verb.setStory(this);
			this.verbsById[verb.id]=verb;
		}

		this.restart();
	}

	getVerbs() {
		return Object.values(this.verbsById);
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

		this.verbsById[verbId].execute(o);
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
			v=this.yaMachine.preprocessAndEval(clause);

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