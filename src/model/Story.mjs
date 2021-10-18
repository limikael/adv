import StoryObject from "./StoryObject.mjs";
import StoryException from "./StoryException.mjs";
import YaMachine from "../utils/YaMachine.mjs";
import {createVerbs} from "./StoryVerbs.mjs";

export default class Story {
	constructor(spec) {
		this.spec=spec;
		this.name="Interactive Fiction Game";
		this.completeMessage="Thanks for playing!";

		let functions={
			have: (id)=>{
				return (this.getObjectById(id,"thing").location=="inventory")
			},

			in: (id)=>{
				return (this.getCurrentLocation().id==id)
			},

			ask: (id)=>{
				this.currentChoiceId=id;
			},

			fail: (message)=>{
				return new StoryException(message)
			},

			set: (stateId)=>{
				this.getObjectById(stateId,"state").setValue(true);
			},

			reset: (stateId)=>{
				this.getObjectById(stateId,"state").setValue(false);
			},

			state: (stateId)=>{
				return this.getObjectById(stateId,"state").getValue();
			},
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

		this.objectives=[];
		this.objects=[];

		for (let objectSpec of spec) {
			let type=Object.keys(objectSpec)[0];

			switch (type) {
				case "objectives":
				case "name":
				case "complete-message":
					if (objectSpec.name)
						this.name=objectSpec.name;

					if (objectSpec["complete-message"])
						this.completeMessage=objectSpec["complete-message"];

					if (objectSpec.objectives)
						this.objectives=objectSpec.objectives;

					break;

				default:
					let o=new StoryObject(objectSpec);
					o.setStory(this);
					this.objects.push(o);
					break;
			}			
		}

		this.currentLocationId=this.getStartLocation().id;
		this.currentChoiceId=null;
		this.currentMessage=null;

		this.runClause(this.getCurrentLocation().enter);
	}

	getStartLocation() {
		for (let object of this.objects)
			if (object.type=="location")
				return object;
	}

	getObjectById(id, type) {
		for (let object of this.objects)
			if (object.id==id) {
				if (type)
					object.assertType(type);

				return object;
			}

		return null;
	}

	getCurrentLocation() {
		return this.getObjectById(this.currentLocationId);
	}

	getCurrentChoice() {
		if (this.currentChoiceId)
			return this.getObjectById(this.currentChoiceId);
	}

	execute(verbId, objectId) {
		let o=this.getObjectById(objectId);

		this.verbsById[verbId].execute(o);
	}

	chooseAlternative(alternativeIndex) {
		let choice=this.getCurrentChoice();
		this.currentChoiceId=null;

		let alternative=choice.getAlternative(alternativeIndex);
		this.runClause(alternative.then);
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

	runClause(clause) {
		let v=this.yaMachine.preprocessAndEval(clause);

		if (v instanceof StoryException) {
			this.currentMessage=v.getMessage();
			return false;
		}

		if (typeof v=="string")
			this.currentMessage=v;

		return true;
	}

	isAlertShowing() {
		return (this.getMessage() || this.isComplete());
	}

	getCompletePercentage() {
		if (!this.objectives.length)
			return 0;

		let complete=0;
		for (let objectiveClause of this.objectives) {
			let v=this.yaMachine.preprocessAndEval(objectiveClause);

			if (!(v instanceof StoryException))
				complete++;
		}

		let percentage=Math.round(100*complete/this.objectives.length);
		return percentage;
	}

	isComplete() {
		return (this.getCompletePercentage()==100)
	}

	getName() {
		return this.name;
	}

	getCompleteMessage() {
		return this.completeMessage;
	}
}