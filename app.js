


// Assign variable to body

let body = document.body;


// Assign a variable to the header and info sections
let secHeader = document.getElementById("sec-header")
let secInfo = document.getElementById("sec-info")

// Assign the keydown pressed to change the title
let keydownPressedTitle = document.getElementById("keydown-pressed")


// If a key is detected, turn the display of the header off
body.addEventListener("keydown", (event) => {

	// Turn off the display
	if (secHeader.style.display != "none"){
		secHeader.style.display = "none";
		secInfo.style.display = "block"
	}

	// Change the title
	keydownPressedTitle.innerText = event.which;

	// Load the data
	keydownDetected(event)
})


// Assign the paragraph ids
let eventKeyPara = document.getElementById("event-key")
let eventCodePara = document.getElementById("event-code")
let eventWhichPara = document.getElementById("event-which")



// Create a function to change the innertext of the div

let keydownDetected = (event) => {
	eventKeyPara.innerText = event.key;
	eventCodePara.innerText = event.code;
	eventWhichPara.innerText = event.which;
}




