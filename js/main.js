'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

/**
 * Clones the skeleton div for the spinner and appends the clone to the correct 
 * location (with class attached)
 */
function initSpinner() {
	let ctc = document.getElementById("spinner");
	let ctcClone =  ctc.cloneNode(true);
	ctcClone.classList.add('lds-dual-ring');
	let box = document.getElementById("tb");
	box.appendChild(ctcClone);
}

/**
 * ===========================
 * Titlescreen 
 * ===========================
**/
monogatari.component ('main-screen').template (() => {
    return `
		<h1 id="title">Snack Break</h1>
        <main-menu></main-menu>
    `;
});
 
$_ready (() => {
	// 2. Inside the $_ready function:

	/**
	 * Animated dialogue blinking spinner. Appears on end of text scroll.
	 * Shows spinner.
	 */
	monogatari.on ('didFinishTyping', () => {
		// console.log("Text has stopped scrolling");
		let ctc = document.getElementsByClassName("lds-dual-ring")[0];
		ctc.style.visibility = "visible";
	});

	/**
	 * Triggers when dialogue text is currently scrolling.
	 * Hides spinner.
	 * Todo: replace punctuation/commas with different amounts of whitespace to sim natural talking
	 */
	monogatari.on ('willRunAction', ({detail: {action}}) => {
		if (action instanceof monogatari.action ('Dialog')) {
			// console.log("Text is scrolling");
			// A dialog is about to start
			let ctc = document.getElementsByClassName("lds-dual-ring")[0];
			ctc.style.visibility = "hidden";
		}
	});

	// Todo: Endgame shennanigans?
	// monogatari.on('willRunAction', ({detail: {action}}) => {
	// 	if (action instanceof monogatari.action ('End')) {
	// 		// Do Something
	// 	}
	// });

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		initSpinner();
	});
});
