export default [{
	id: "bedroom",
	type: "location",
	name: "the bedroom",
	description: "You are in the bedroom. It is a pretty normal bedroom, with a bed in it.",
	destinations: {
		"bathroom": (story)=>{
			if (!story.using("lamp")) {
				story.message("It is dark, you can't see where you are going");
				return false;
			}

			if (!story.using("slippers")) {
				story.message("The floor is too cold");
				return false;
			}

			return true;
		}
	}
},{
	id: "bathroom",
	type: "location",
	name: "the bathroom",
	description: "It is a quite normal bathroom.",
	destinations: {
		"bedroom": true
	}
},{
	id: "toothbrush",
	type: "thing",
	name: "toothbrush",
	indefinite: "a toothbrush",
	location: "bathroom",
	description: "It is an Oral-B Pro-Health All-In-One Soft Bristle Toothbrush. One of the top 10 market leading toothbrushes for 2020.",
},{
	id: "slippers",
	type: "thing",
	name: "slippers",
	indefinite: "a pair of slippers",
	description: "A pair of slippers with rabbit ears.",
	location: "bedroom",
	use: (story)=>{
		if (!story.has("slippers")) {
			story.message("In order to wear your slippers, you first need to pick them up.");
			return false;
		}

		story.message("You put the slippers on your feet. They are very comfortable.");
		return true;
	}
},{
	id: "lamp",
	type: "thing",
	name: "lamp",
	indefinite: "a lamp",
	description: "Lamps are different, but the light is the same",
	location: "bedroom",
	use: (story)=>{
		story.message("Let there be light! Suddenly you can see what is around you.");
		return true;
	},
	pickup: (story)=>{
		story.message("It is too heavy to carry around.");
		return false;
	}
},{
	id: "shower",
	type: "thing",
	description: "A quite ordinary shower.",
	location: "bathroom"
},{
	id: "lightTurnedOn",
	type: "state"
},{
	id: "wearingSlippers",
	type: "state"
}]