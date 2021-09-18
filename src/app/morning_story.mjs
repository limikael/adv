export default [{
	id: "bedroom",
	type: "location",
	name: "the bedroom",
	description: "You are in the bedroom. It is a pretty normal bedroom, with a bed in it.",
	destinations: ["bathroom"],
	goto: (story)=>{
		if (!story.using("lamp"))
			return story.cant("It is dark, you can't see where you are going.");

		if (!story.using("slippers"))
			return story.cant("The floor is too cold.");
	}
},{
	id: "bathroom",
	type: "location",
	name: "the bathroom",
	description: "It is a quite normal bathroom.",
	destinations: ["bedroom"],
	goto: (story)=>{
		if (!story.using("slippers"))
			return story.cant("The floor is too cold.");
	}
},{
	id: "toothbrush",
	type: "thing",
	name: "toothbrush",
	indefinite: "a toothbrush",
	location: "bathroom",
	description: "It is an Oral-B Pro-Health All-In-One Soft Bristle Toothbrush. One of the top 10 market leading toothbrushes for 2020.",
	use: (story)=>{
		if (!story.has("toothbrush"))
			return story.cant("Doesn't really work, are you going to move your teeth to the toothbrush?");

		return story.can("Swrrr... swwwrr.... Brushing sound... Your teeth are now clean...")
	},
},{
	id: "slippers",
	type: "thing",
	name: "slippers",
	indefinite: "a pair of slippers",
	description: "A pair of slippers with rabbit ears.",
	location: "bedroom",
	inuse: "on your feet",
	use: (story)=>{
		if (!story.has("slippers"))
			return story.cant("In order to wear your slippers, you first need to pick them up.");

		return story.can("You put the slippers on your feet. They are very comfortable.");
	}
},{
	id: "lamp",
	type: "thing",
	name: "lamp",
	indefinite: "a lamp",
	description: "Lamps are different, but the light is the same",
	location: "bedroom",
	use: (story)=>{
		return story.can("Let there be light! Suddenly you can see what is around you.");
	},
	pickup: (story)=>{
		return story.cant("It is too heavy to carry around.");
	}
},{
	id: "shower",
	type: "thing",
	description: "A quite ordinary shower.",
	location: "bathroom",
	indefinite: "a shower",
	use: (story)=>{
		if (story.has("slippers"))
			return story.cant("Your slippers would get all wet and soggy if you shower with them on.");

		return story.can("Aaahhh... Nice!!!");
	},
	pickup: (story)=>{
		return story.cant("It is too heavy to carry around.");
	}
}]