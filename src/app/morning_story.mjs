export default [{
	id: "bedroom",
	type: "location",
	name: "the bedroom",
	description: "You are in your bedroom. It is the favourite part of your house because you can do what you like in there, and yet not get disturbed. There is a bed right in the middle of the squarish room, which takes up quite a bit of space, but you like it that way.",
	destinations: ["bathroom","kitchen"],
	goto: [{
		"object": "lamp",
		"clause": "not_in_use",
		"then": "succedd",
		"fail": "The dark room is like a place out of time, a place to rest without consequence. Yet the darkness makes you fumble and lose your sense of direction."
	},{
		"not_using": "slippers",
		"fail": "The cold from the floor moves in only to meet the warmth of your blood. You feel it wash over your skin, again and again, only to be met by the beat of your heart, again and again. You quickly pull your feet back in under the cover, the floor is way too cold."
	}]

	(story)=>{
		if (!story.using("lamp"))
			return story.cant("The dark room is like a place out of time, a place to rest without consequence. Yet the darkness makes you fumble and lose your sense of direction.");

		if (!story.using("slippers"))
			return story.cant("The cold from the floor moves in only to meet the warmth of your blood. You feel it wash over your skin, again and again, only to be met by the beat of your heart, again and again. You quickly pull your feet back in under the cover, the floor is way too cold.");
	}
},{
	id: "bathroom",
	type: "location",
	name: "the bathroom",
	description: "You are in your bathroom. It is a place of washing, of nurturing our sanity with the sensation of warm water and aromatic soaps. For the body must feel loved and cared for, for then it feeds back these messages to the brain and begins to set up a positive cycle of wellness.",
	destinations: ["bedroom"],
	goto: (story)=>{
		if (!story.using("slippers"))
			return story.cant("The floor is too cold.");
	}
},{
	id: "kitchen",
	type: "location",
	name: "the kitchen",
	description: "This is your kitchen. To work in the kitchen is to work for the love and nourishment of others, to give of yourself, to put your soul into the food.",
	destinations: ["bedroom","garden"],
},{
	id: "garden",
	type: "location",
	name: "your garden",
	description: "The grass always seems to whisper in the spring, like a church full of people all saying ssssh together. The stalks sway with a salsa rhythm, nodding their heads in delight. At night, the wind dies down and a newly-minted moon appears, drenching shady glades with silver light.  Yipping fox cubs can be heard in the distance and the lonely hoot of an owl sounds like a phantom lost in the darkness.",
	destinations: ["kitchen"],
	enter: (story)=>{
		if (!story.is("brushedTeeth"))
			return story.cant("Good teeth can impact so many areas of life, including how you feel about yourself. The health of the brain impacts body health and social mobility, and that impacts family health. Everything is connected, we are all connected. We are supposed to love and care for our neighbours, right?")
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

		story.set("brushedTeeth");

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
	description: "The sleek silver angle-poise lamp is simple and elegant - minimalist perhaps. You find it satisfyingly heavy too, a justification for the huge price tag.",
	location: "bedroom",
	use: (story)=>{
		return story.can("Igniting the world anew with such brilliance! You can suddenly see where you are going.");
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
},{
	id: "gnome",
	type: "thing",
	description: "You would sit in the garden, feeling joy from how the sunny rays warmed your skin, and listen to the tales of the gnome. For they talk, the gnomes, if you can listen with your heart while your ears enjoy the birdsong. The gnome's hat has gotten too old. It had been fraying for the best part of a century but now the stitching around the brim was coming away and even magic couldn't repair it. The once midnight blue fabric was almost an embarrassing navy and the pointed top drooped worse than a well used sock.",
	location: "garden",
	indefinite: "a garden gnome",
	pickup: (story)=>{
		return story.cant("It is too heavy to carry around.");
	}
},{
	"id": "brushedTeeth",
	"type": "state"
}]