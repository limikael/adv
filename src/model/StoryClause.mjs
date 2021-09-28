export default class StoryClause {
	constructor(conf) {
		this.conf=conf;
	}

	setStory(story) {
		this.story=story;
	}

	evaluate() {
		if (this.evaluated)
			return;

		this.evaluated=true;

		if (typeof this.conf=="string") {
			this.decided=true;
			this.message=this.conf;
			this.outcome=undefined;
		}

		else if (this.conf instanceof Array) {
			throw new Error("Arrays not impl");
		}

		else if (typeof this.conf=="object") {
			let predicates={
				if_location: (x)=>
					(x==this.story.getCurrentLocation().id)
			}

			for (let p in predicates) {
				if (this.conf[p]) {
					let arg=this.conf[p];
					let f=predicates[p];

					if (f(arg)) {
						if (this.conf.then)
							this.evaluateSubClause(this.conf.then);
					}

					else {
						if (this.conf.else)
							this.evaluateSubClause(this.conf.else); 
					}
				}
			}

		}

		else
			throw new Error("Strange clause");
	}

	evaluateSubClause(subClauseConf) {
		let subClause=new StoryClause(subClauseConf);
		subClause.setStory(this.story);
		subClause.evaluate();
		if (subClause.isDecided()) {
			this.decided=true;
			this.message=subClause.message;
			this.outcome=subClause.outcome;
		}
	}

	isDecided() {
		return this.decided;
	}

	getOutcome() {
		return this.outcome;
	}

	getMessage() {
		this.evaluate();
		return this.message;
	}
}