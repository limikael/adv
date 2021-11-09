import StoryObject from "./StoryObject.mjs";
import StoryException from "./StoryException.mjs";
import StoryAlternative from "./StoryAlternative.mjs";
import YaMachine from "../utils/YaMachine.mjs";
import {createMethodPromise, delay, isPromise} from "../utils/promise-util.mjs";
import {createVerbs} from "./StoryVerbs.mjs";
import EventDispatcher from "events";
import yaml from "yaml";
import {lineNumberByCharIndex} from "../../src/utils/string-util.mjs";

export default class Story extends EventDispatcher {
	constructor(source) {
		super();

		try {
			this.setupYaMachine();

			this.source=new String(source);
			this.spec=this.yaMachine.parse(this.source);
//			this.spec=this.yaMachine.preprocess(yaml.parse(this.source));

			this.name="Interactive Fiction Game";
			this.completeMessage="Thanks for playing!";
			this.actions=[];

			this.verbsById={};
			for (let verb of createVerbs()) {
				this.verbsById[verb.id]=verb;
				verb.setStory(this);

				this.yaMachine.addFunction(verb.id,async (arg)=>{
					await this.execute(verb.id,arg);
				});
			}

			this.setupStory();
		}

		catch (e) {
			this.setError(e);
		}
	}

	setError(e) {
		this.error=new Error();
		this.error.message=e.message;
		this.error.name=e.name;

		if (e.source?.range?.start)
			this.error.lineNumber=lineNumberByCharIndex(this.source,e.source.range.start);

		if (e.range) {
			this.error.lineNumber=lineNumberByCharIndex(this.source,e.range[0]);
		}
	}

	setupYaMachine() {
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
				if (o.hasOwnProperty("exists")) {
					if (!this.evalClause(o.exists))
						return null;
				}

				return new StoryAlternative(o.label,o.do);
			}
		};

		let macros={
			alternative: (clause)=>{
				let v={_alternative: {obj: {
					label: clause.alternative,
					do: {
						quote: clause.do
					}
				}}};

				if (clause.hasOwnProperty("exists"))
					v._alternative.obj.exists=clause.exists;

				return v;
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
	}

	getVerbs() {
		let res=[];

		for (let verbId in this.verbsById)
			if (this.storyVerbs.includes(verbId))
				res.push(this.verbsById[verbId]);

		return res;
	}

	setupStory() {
		this.objectives=[];
		this.objects=[];
		this.storyVerbs=["goto","pickup"];

		let startId;

		for (let objectSpec of this.spec) {
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
					this.storyVerbs=[];

					for (let verbId of objectSpec.verbs) {
						if (!this.verbsById[verbId])
							throw new Error("The verb "+verbId+" doesn't exist.");

						this.storyVerbs.push(String(verbId));
					}
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

		let p=this.yaMachine.evalMaybeAsync(this.getCurrentLocation().enter);

		if (isPromise(p))
			p.catch((e)=>{
				this.setError(e);
			});
	}

	getStartLocation() {
		for (let object of this.objects)
			if (object.type=="location")
				return object;
	}

	getObjectById(id, type) {
		for (let object of this.objects) {
			if (String(object.id)==id) {
				if (type)
					object.assertType(type);

				return object;
			}
		}

		return null;
	}

	getCurrentLocation() {
		return this.getObjectById(this.currentLocationId);
	}

	getCurrentLocationDescriptions() {
		return this.evalClauseArray(this.getCurrentLocation().description);
	}

	async actionExecute(verbId, objectId) {
		this.actions.push({
			action: verbId,
			objectId: objectId
		});

		await this.execute(verbId, objectId);
	}

	async execute(verbId, objectId) {
		let o=this.getObjectById(objectId);

		try {
			await this.verbsById[verbId].execute(o);
		}

		catch (e) {
			this.setError(e);
			this.emit("change");
			throw e;
		}

		this.emit("change");

		if (this.dead || this.getCompletePercentage()==100) {
			throw new Error("completion not yet implemented");

			await this.message("Thanks for playing!");
			this.restart();
			this.emit("change");
		}
	}

	async message(message) {
//		console.log("doing message: "+message.toString());
//		message="test";

		if (this.currentMessage)
			throw new Error("there is already a message");

		if (message instanceof Array)
			this.currentMessage=message;

		else
			this.currentMessage=[message];

		let m=createMethodPromise();
		this.messagePromise=m;
		this.emit("change");

		if (this.applyingActions && this.applyingActions.length) {
			let action=this.applyingActions.shift();

			if (action.action=="dismissMessage") {
				if (this.getAlternatives())
					m.reject("Bad story structure");

				else
					this.dismissMessage();
			}

			else if (action.action=="chooseAlternative") {
				if (!this.getAlternatives())
					m.reject("Bad story structure");

				else {
					await this.chooseAlternative(action.index);
					m.resolve();
				}
			}

			else {
				m.reject("Bad story structure");
			}
		}

		return await m;
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
		this.actions.push({
			action: "dismissMessage"
		});

		let p=this.messagePromise;

		this.currentMessage=null;
		this.messagePromise=null;

		if (p)
			p.resolve();

		this.emit("change");
	}

	async chooseAlternative(index) {
		this.actions.push({
			action: "chooseAlternative",
			index: index
		});

		let p=this.messagePromise;
		let todo=this.getAlternatives()[index].do;

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
					String(object.location)==String(current.id) &&
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

	getActions() {
		return this.actions;
	}

	isMessageAction(action) {
		if (action.action=="dismissMessage" ||
				action.action=="chooseAlternative")
			return true;

		return false;
	}

	haveMoreActionsToApply() {
		for (let action in this.applyingActions)
			if (!this.isMessageAction(action))
				return true;

		return false;
	}

	async applyActions(actions) {
		this.applyingActions=actions;

		while (this.applyingActions.length) {
			let action=this.applyingActions.shift();

			if (action.action=="dismissMessage" && this.getMessage())
				this.dismissMessage();

			else if (this.isMessageAction(action))
				throw new Error("Unexpected message action");

			else if (this.haveMoreActionsToApply())
				await this.actionExecute(action.action,action.objectId);

			else
				this.actionExecute(action.action,action.objectId);
		}

		this.applyingActions=null;
	}

	getError() {
		return this.error;
	}
}