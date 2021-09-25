import StoryObject from "./StoryObject.mjs";
import StoryPredicate from "./StoryPredicate.mjs";

export default class Story {
	constructor(spec) {
		this.spec=spec;

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

		let predicate=this.evalClause(current.goto,StoryPredicate.can());

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.isPossible()) {
			let dest=this.getObjectById(object.id);
			let destPredicate=this.evalClause(dest.enter,StoryPredicate.can());

			if (destPredicate.getMessage())
				this.currentMessage=destPredicate.getMessage();

			if (destPredicate.isPossible())
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

		let def=StoryPredicate.cant("It is not useful.");
		let predicate=this.evalClause(object.use,def);

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.isPossible()) {
			object.using=true;
			object.have_used=true;
		}
	}

	pickup(object) {
		if (object.type!="thing") {
			this.message("Can't pick that up");
			return;
		}

		let def=StoryPredicate.can("Taken.");
		let predicate=this.evalClause(object.pickup,def);

		if (predicate.getMessage())
			this.currentMessage=predicate.getMessage();

		if (predicate.isPossible())
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

		if (predicate.isPossible()) {
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

	evalClauseObject(clauseObject) {
		let args=[
			"fail","succeed",
			"have","dont_have","using","not_using",
			"have_used","have_not_used","is_in",
			"have_looked_at","have_not_looked_at"
		];

		for (let k in clauseObject)
			if (!args.includes(k))
				throw new Error("Unknown arg in clause: "+k);

		if (!clauseObject.have &&
				!clauseObject.dont_have &&
				!clauseObject.using &&
				!clauseObject.not_using &&
				!clauseObject.have_used &&
				!clauseObject.have_not_used &&
				!clauseObject.is_in &&
				!clauseObject.have_looked_at &&
				!clauseObject.have_not_looked_at)
			return true;

		if (clauseObject.have &&
				this.getObjectById(clauseObject.have).location=="inventory")
			return true;

		if (clauseObject.dont_have &&
				this.getObjectById(clauseObject.dont_have).location!="inventory")
			return true;

		if (clauseObject.using &&
				this.getObjectById(clauseObject.using).using)
			return true;

		if (clauseObject.not_using &&
				!this.getObjectById(clauseObject.not_using).using)
			return true;

		if (clauseObject.have_used &&
				this.getObjectById(clauseObject.have_used).have_used)
			return true;

		if (clauseObject.have_not_used &&
				!this.getObjectById(clauseObject.have_not_used).have_used)
			return true;

		if (clauseObject.is_in &&
				this.currentLocationId==clauseObject.is_in)
			return true;

		if (clauseObject.have_looked_at &&
				this.getObjectById(clauseObject.have_looked_at).have_looked_at)
			return true;

		if (clauseObject.have_not_looked_at &&
				!this.getObjectById(clauseObject.have_not_looked_at).have_looked_at)
			return true;

		return false;
	}

	evalClause(clause, defaultClause) {
		if (clause instanceof Array) {
			for (let subClause of clause) {
				let subPred=this.evalClause(subClause);
				if (subPred)
					return subPred;
			}

			return defaultClause;
		}

		if (clause=="succeed")
			return StoryPredicate.can();

		if (clause=="fail")
			return StoryPredicate.cant();

		if (clause && this.evalClauseObject(clause)) {
			if (clause.fail)
				return StoryPredicate.cant(clause.fail);

			if (clause.succeed)
				return StoryPredicate.can(clause.succeed);
		}

		return defaultClause;
	}

	getStoryCompleteMessage() {
		let o=this.getObjectById("complete");
		if (!o)
			return null;

		let p=this.evalClause(o.clause,StoryPredicate.cant());

		if (p.isPossible())
			return p.getMessage();
	}

	isAlertShowing() {
		return (this.getMessage() || this.getStoryCompleteMessage());
	}
}