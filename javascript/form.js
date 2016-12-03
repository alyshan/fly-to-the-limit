// Start booking form
var bookingForm   = document.querySelector ('#booking-form');
var book 		  =document.querySelector('#book-button')
var namePattern   = new RegExp("^[a-zA-Z' .-]{4-30}$");
var phonePattern  = new RegExp("^[0-9]{3-10}$");
var emailPattern  = new RegExp("^[a-zA-Z0-9 .-@]{4-30}$");
var nameInput     = document.querySelector ('#name');
var nameMessage   = document.querySelector('#name-message')
var emailInput    = document.querySelector ('#email');
var emailMessage  = document.querySelector('#email-message');
var phoneInput    = document.querySelector('#phone');
var phoneMessage  = document.querySelector('#phone-message');
var peopleInput   = document.querySelector('#people');
var commentsInput = document.querySelector('#comments');

// // Blur event
nameinput.onblur = function() {
	if ( namePattern.test (this.value) ) {

// Name input
if( namePattern.test( nameInput.value ) ) {
	
	// Name is valid
	nameMessage.innerHTML = "";

} else {
	// Name is invalid
	nameMessage.innerHTML = "Name is invalid";
}

// Email input
if( emailPattern.test( emailInput.value ) ) {
	
	// Email is invalid
	emailMessage.innerHTML = "";

} else {
	// Email is invalid
	phoneMessage.innerHTML = "Incorrect Email"
}

// Phone number input
if(phonePattern.test( phoneInput.value ) ) {
	
	// Phone is valid
	phoneMessage.innerHTML = "";

} else {
	//Phone is invalid
	phoneMessage.innerHTML = "Incorrect Number"
}

// Pop up on submit
book.onclick = function(event) {
 	
 	// Submission pop up
 	alert('Thank you for your booking. We will contact you shortly');
 	
 	// Stop the form from submitting
 	event.preventDefault();
}
