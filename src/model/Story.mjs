import StoryObject from "./StoryObject.mjs";
import StoryException from "./StoryException.mjs";
import StoryAlternative from "./StoryAlternative.mjs";
import YaMachine from "../utils/YaMachine.mjs";
import {createMethodPromise} from "../utils/promise-util.mjs";
import {createVerbs} from "./StoryVerbs.mjs";
import EventDispatcher from "events";

export default class Story extends EventDispatcher {
	constructor(spec) {
		super();
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

			spawn: async (id)=>{
				let o=this.getObjectById(id,"def");
				return await o.run();
			},

			setdead: (none)=>{
				this.dead=true;
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

			_message: async (message)=>{
				return await this.message(message);
			},

			exception: (message)=>{
				return new StoryException(message);
			},

			applied: (o)=>{
				let thing=this.getObjectById(o.thing,"thing");
				return thing.appliedVerbs.includes(o.verb)
			},

			_alternative: (o)=>{
				return new StoryAlternative(o.label,o.do);
			}
		};

		let macros={
			alternative: (clause)=>{
				return {_alternative: {obj: {
					label: clause.alternative,
					do: {
						quote: clause.do
					}
				}}}
			},

			fail: (clause)=>{
				return [
					{message: clause.fail},
					{return: {exception: null}}
				];
			},

			die: (clause)=>{
				return [
					{message: clause.die},
					{setdead: null},
					{return: {exception: null}}
				];
			},

			did: (clause)=>{
				let verb=Object.keys(clause.did)[0];
				let thing=clause.did[verb];

				return {
					applied: {
						obj: {
							verb: verb,
							thing: thing
						}
					}
				}
			},

			message: (clause)=>{
				return {
					_message: {
						obj: clause.message
					}
				}
			}
		}

		this.yaMachine=new YaMachine();
		for (let f in functions)
			this.yaMachine.addFunction(f,functions[f].bind(this));

		for (let m in macros)
			this.yaMachine.addMacro(m,macros[m].bind(this));

		this.verbsById={};
		for (let verb of createVerbs()) {
			this.verbsById[verb.id]=verb;
			verb.setStory(this);

			this.yaMachine.addFunction(verb.id,(arg)=>{
				this.execute(verb.id,arg);
			});
		}

		this.restart();
	}

	getVerbs() {
		let res=[];

		for (let verbId in this.verbsById)
			if (this.storyVerbs.includes(verbId))
				res.push(this.verbsById[verbId]);

		return res;
	}

	restart=()=>{
		let spec=this.yaMachine.preprocess(JSON.parse(JSON.stringify(this.spec)));

		this.dead=false;
		this.objectives=[];
		this.objects=[];
		this.storyVerbs=["goto","pickup"];

		let startId;

		for (let objectSpec of spec) {
			let type=Object.keys(objectSpec)[0];

			switch (type) {
				case "objectives":
				case "name":
				case "complete-message":
				case "start":
					if (objectSpec.name)
						this.name=objectSpec.name;

					if (objectSpec["complete-message"])
						this.completeMessage=objectSpec["complete-message"];

					if (objectSpec.objectives)
						this.objectives=objectSpec.objectives;

					if (objectSpec.start)
						startId=objectSpec.start;
					break;

				case "verbs":
					this.storyVerbs=objectSpec.verbs;
					break;

				default:
					let o=new StoryObject(objectSpec);
					o.setStory(this);
					this.objects.push(o);

					if (o.things)
						for (let object of o.things)
							this.objects.push(object);

					break;
			}			
		}

		if (!startId)
			startId=this.getStartLocation().id;

		this.currentLocationId=startId;
		this.currentMessage=null;

		this.yaMachine.evalAsync(this.getCurrentLocation().enter);
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

	getCurrentLocationDescriptions() {
		return this.evalClauseArray(this.getCurrentLocation().description);
	}

	async execute(verbId, objectId) {
		let o=this.getObjectById(objectId);

		await this.verbsById[verbId].execute(o);
		this.emit("change");

		if (this.dead || this.getCompletePercentage()==100) {
			await this.message("Thanks for playing!");
			this.restart();
			this.emit("change");
		}
	}

	message(message) {
		if (this.currentMessage)
			throw new Error("there is already a message");

		if (message instanceof Array)
			this.currentMessage=message;

		else
			this.currentMessage=[message];

		this.messagePromise=createMethodPromise();
		this.emit("change");

		return this.messagePromise;
	}

	getMessage() {
		return this.currentMessage;
	}

	getAlternatives() {
		if (!this.currentMessage)
			return null;

		let alternatives=[];
		for (let a of this.currentMessage)
			if (a instanceof StoryAlternative)
				alternatives.push(a);

		if (!alternatives.length)
			return null;

		return alternatives;
	}

	dismissMessage() {
		let p=this.messagePromise;

		this.currentMessage=null;
		this.messagePromise=null;

		if (p)
			p.resolve();

		this.emit("change");
	}

	async chooseAlternative(todo) {
		let p=this.messagePromise;

		this.currentMessage=null;
		this.messagePromise=null;
		this.emit("change");

		let v=await this.yaMachine.evalAsync(todo);

		if (p)
			p.resolve(v);

		this.emit("change");
	}

	getThingsByCurrentLocation() {
		let current=this.getCurrentLocation();
		let res=[];

		for (let object of this.objects) {
			if (object.type=="thing" &&
					object.location==current.id &&
					this.evalClause(object.exists))
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

	evalClause(clause) {
		return this.yaMachine.evalSync(clause);
	}

	evalClauseArray(clauseArray) {
		let res=[];

		if (!(clauseArray instanceof Array))
			return [this.evalClause(clauseArray)];

		for (let clause of clauseArray) {
			let c=this.evalClause(clause);
			if (c) {
				if (c instanceof Array)
					res=[...res,...c];

				else
					res.push(c);
			}
		}

		return res;
	}

	getCompletePercentage() {
		if (!this.objectives.length)
			return 0;

		let complete=0;
		for (let objectiveClause of this.objectives) {
			let v=this.evalClause(objectiveClause);

			if (v && !(v instanceof StoryException))
				complete++;
		}

		let percentage=Math.round(100*complete/this.objectives.length);
		return percentage;
	}

	getName() {
		return this.name;
	}
}