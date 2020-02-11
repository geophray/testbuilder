// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // Create variables cardLength, and cardNetwork
  var cardLength = cardNumber.length;
  var cardNetwork = "Unable to identify card network.";
  // If cardLength not 14, 15, or 16, return default error message.
  switch (cardLength) {
  	case 14:
  		// If cardLength is 14 
	  	// Check to see if cardPrefix is 38 or 39
	  	if(isDinersClub(cardNumber)) {
	  		// If it is return "Diner's Club"
	  		cardNetwork = "Diner's Club";
	  	}
  		// Otherwise, return default error message.
  		return cardNetwork;
  		break;
	case 15:
	  // If cardLength is 15
	  cardPrefix = cardNumber.slice(0, 2);
	  	// Check to see if cardPrefix is 34 or 37 
	  	if(isAmericanExpress(cardNumber)) {
	  		// If it is return "American Express"
	  		cardNetwork = "American Express";
	  	}
	  	return cardNetwork;
	  	break;
  	default:
  		// Return default error message if no matches.
  		return cardNetwork;

  	}
};

//Create helper functions to check prefixes
var isDinersClub = function(cardNumber) {
  	var cardPrefix = cardNumber.slice(0, 2);
	if(cardPrefix === '38' | cardPrefix === '39') {
		return true;
	} 
};

var isAmericanExpress = function(cardNumber) {
	var cardPrefix = cardNumber.slice(0, 2);
	if(cardPrefix === '34' | cardPrefix === '37') {
		return true;
	} 
}
