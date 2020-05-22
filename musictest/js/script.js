"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	//"school": "modern-school1.png"
};

// Define the Characters
const characters = {
	"j": {
		"Name": "Jen",
		"Color": "#5bcaff",
		"Directory": "Jen",
		"Images": {
			"neutral01": "neutral01.png",
			"neutral02": "neutral02.png",
			"neutral03": "neutral03.png",
			"smile01": "smile01.png",
			"smile02": "smile02.png",
			"sad": "sad01.png",
			"annoyed02": "annoyed02.png"
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		"notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},

		//"scene school",
		"show j neutral01 right",
		"j Hi {{player.Name}}. Welcome!",
		"show j neutral03 right",
		"j My name is Jen, and I am your guide today.",
		"j We will learn to make music by going on a journey.",

		{
			"Choice": {
				"Dialog": "j Are you ready?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				//"No": {
				//	"Text": "No",
				//	"Do": "jump No"
				//}
			}
		}
	],

	"Yes": [

		"show j smile01 right",
		"j That's awesome!",
		"show j neutral03 right",
		"j  Look at the screen on the left. See the fullscreen button on the top right corner?",
		"j Click it to enter fullscreen mode, and then exit.",
		"j Now you should see a piano!",
		"j Click on the green flag to activate the piano, and press \"1\" on your keyboard and listen to the sound that it makes.",
		"show j neutral01 right",
		{
			"Choice": {
				"Dialog": "j I feel like I’m at home. What do you feel? (click on the green flag again and then press \"1\" on your keyboard)",
				"welcome_home": {
					"Text": "I feel at home too",
					"Do": "jump welcome_home"
				},
				"nohome1": {
					"Text": "I'm not feeling it",
					"Do": "jump nohome"
				},
				"nohome2": {
					"Text": "What does \"home\" mean?",
					"Do": "jump nohome"
				}
				//"No": {
				//	"Text": "No",
				//	"Do": "jump No"
				//}
			}
		}
	],

	"welcome_home": [
		"show j smile01 right",
		"j When we make music, the first thing we do is to find a home.",
		{
			"Choice": {
				"Dialog": "j When you press \"1\", it plays a chord that represents our home in music.",
				"next_home": {
					"Text": "What do we do next?",
					"Do": "jump next_home"
				},
				"home_info": {
					"Text": "I want to know more about that chord",
					"Do": "jump home_info"
				},
				//"No": {
				//	"Text": "No",
				//	"Do": "jump No"
				//}
			}
		}
	],

	"nohome": [
		"show j annoyed02 right",
		"j I'll try to explain. Click on the green flag and press \"1\" a few more times.",
		"show j neutral01 right",
		"j I feel a sense of stability. I feel relaxed. I feel comfortable.",
		{
			"Choice": {
				"Dialog": "That’s what I mean by \"home\". (You can still click on the green flag and press \"1\" if you want!)",
				"welcome_home": {
					"Text": "Now I feel at home too",
					"Do": "jump welcome_home"
				},
				"nohome1": {
					"Text": "I feel differently",
					"Do": "jump home_different"
				},
				//"No": {
				//	"Text": "No",
				//	"Do": "jump No"
				//}
			}
		}
	],
	"home_different": [
		"show j smile01 right",
		"j That’s okay! We all feel different things when listening to music.",
		{
			"Input": {
				"Text": "If you had to put a name to your feeling, what would it be?",
				"Validation": function (input) {
					return input.trim().length >= 0;
				},
				"Save": function (input) {
					storage.player.HomeFeeling = input;
					return true;
				},
				"Warning": "Tell me something!"
			}
		},
		"j Thanks for sharing with me!",
		"jump welcome_home"
	],

	"next_home": [
		"show j smile01 right",
		"j Great! Now that we know where home is, let’s learn a little about all the places we can go in music.",
		"j What if we press a number other than 1? That will take us somewhere else.",
		"j Click on the green flag and press any number from 2 to 7! (end of prototype)"
		/*{
			"Choice": {
				"Dialog": "j Click on the green flag and press any number from 2 to 7!",
				"two": {
					"Text": "Try \"2\"",
					"Do": "jump next_home"
				},
				"three": {
					"Text": "Try \"3\"",
					"Do": "jump home_info"
				},
				//"No": {
				//	"Text": "No",
				//	"Do": "jump No"
				//}
			}
		}*/
	],

	"home_info": [
		"show j smile01 right",
		"j A chord is three or more distinct notes played at the same time.",
		"j In the “1” chord, we play three notes that go well together, which is why it sounds stable and relaxed.",
		"jump next_home"
		/*{
			"Choice": {
				"Dialog": "j "When you press \"1\", it plays a chord that represents our home in music.",
				"next_home": {
					"Text": "What do we do next?",
					"Do": "jump next_home"
				},
				"home_info": {
					"Text": "I want to know more about that chord",
					"Do": "jump home_info"
				},
				//"No": {
				//	"Text": "No",
				//	"Do": "jump No"
				//}
			}
		}*/
	]
	/*"No": [

		"j You can do it now.",

		"display message Help",

		"j Go ahead and create an amazing Game!",
		"j I can't wait to see what story you'll tell!",
		"end"
	]*/
};
