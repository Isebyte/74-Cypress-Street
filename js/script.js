/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {
	"Developers": "Ise"
});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
	'hideTextBox': { // hide text box - usage: "hideTextBox,"
		name: "",
		color: 'rgba(0,0,0,0)'
	},
	'???': {
		name: '&#8212; &nbsp; ??? &nbsp; &#8212;',
		color: 'white'
	}
});

/**
 * 
 * @specialTags
 * hideTextBox : Hides the textbox until the dialogue is progressed (clicked)
*/
monogatari.script({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		"[Another calm, quiet night.]",
		"[Nobody’s here, but then again, who would be?]",
		"end"
	]
});