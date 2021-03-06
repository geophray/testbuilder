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
  var cardNetwork = 'Unable to identify card network.';
  // Check cardLength against cases. If no match, return default error message.
  switch (cardLength) {
  	case 12:
  		//if cardLength is 12 chedk if prefix matches Maestro
  		if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		}
  		break;

  	case 13:
  		// If cardLength is 13 check if prefix matches Visa or Maestro
  		if(isVisa(cardNumber)) {
  			cardNetwork = "Visa";
  		} else if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		}
  		break;

  	case 14:
  		// If cardLength is 14 check if prefix matches Diner's Club or Maestro
	  	if(isDinersClub(cardNumber)) {
	  		// If true return "Diner's Club"
	  		cardNetwork = "Diner's Club";
	  	} else if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		}
  		break;

	case 15:
	  // If cardLength is 15 check if prefix matches American Express or Maestro
	  	if(isAmericanExpress(cardNumber)) {
	  		// If true return "American Express"
	  		cardNetwork = "American Express";
	  	} else if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		}
	  	break;

  	case 16:
  		// If cardLength is 16 check if prefix matches Visa, MasterCard, Discover, Maestro, China UnionPay, or Switch
  		if(isSwitch(cardNumber)) {
  			cardNetwork = "Switch";
  		} else if(isVisa(cardNumber)) {
  			cardNetwork = "Visa";
  		} else if(isMasterCard(cardNumber)) {
  			cardNetwork = "MasterCard";
  		} else if(isDiscover(cardNumber)) {
  			cardNetwork = "Discover";
  		} else if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		} else if(isChinaUnionPay(cardNumber)) {
  			cardNetwork = "China UnionPay";
  		}
  		break;

  	case 17:
  		// If cardLength is 19 check if prefix matches Maestro, or China UnionPay
  		if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		} else if(isChinaUnionPay(cardNumber)) {
  			cardNetwork = "China UnionPay";
  		}
  		break;

  	case 18:
  		// If cardLength is 19 check if prefix matches Maestro, China UnionPay, or Switch
  		if(isSwitch(cardNumber)) {
  			cardNetwork = "Switch";
  		} else if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		} else if(isChinaUnionPay(cardNumber)) {
  			cardNetwork = "China UnionPay";
  		}
  		break;

  	case 19:
  		// If cardLength is 19 check if prefix matches Visa, Discover, Maestro, China UnionPay, or Switch
  		if(isSwitch(cardNumber)) {
  			cardNetwork = "Switch";
  		} else if(isVisa(cardNumber)) {
  			cardNetwork = "Visa";
  		} else if(isDiscover(cardNumber)) {
  			cardNetwork = "Discover";
  		} else if(isMaestro(cardNumber)) {
  			cardNetwork = "Maestro";
  		} else if(isChinaUnionPay(cardNumber)) {
  			cardNetwork = "China UnionPay";
  		}
  		break;

  	default:

  	}

  	return cardNetwork;
};

//Create helper functions to check prefixes
var isDinersClub = function(cardNumber) {
  	var cardPrefix = cardNumber.slice(0, 2);

	if(cardPrefix === '38' || cardPrefix === '39') {
		return true;
	} 
};

var isAmericanExpress = function(cardNumber) {
	var cardPrefix = cardNumber.slice(0, 2);

	if(cardPrefix === '34' || cardPrefix === '37') {
		return true;
	} 
}

var isVisa = function(cardNumber) {
	var cardPrefix = cardNumber.slice(0, 1);

	if(cardPrefix === '4') {
		return true;
	}
}

var isMasterCard = function(cardNumber) {
	var cardPrefix = cardNumber.slice(0, 2);

	if(cardPrefix >= 51 && cardPrefix <= 55) {
		return true;
	}
}

var isDiscover = function(cardNumber) {
	var first2Digits = cardNumber.slice(0, 2);
	var first3Digits = cardNumber.slice(0, 3);
	var first4Digits = cardNumber.slice(0, 4);

	if(first2Digits === '65' || first3Digits >= 644 && first3Digits <= 649 || first4Digits === '6011') {
		return true;
	}
}

var isMaestro = function(cardNumber) {
	var cardPrefix = cardNumber.slice(0, 4);

	if(cardPrefix === '5018' || cardPrefix === '5020' || cardPrefix === '5038' || cardPrefix === '6304') {
		return true;
	}
}

var isChinaUnionPay = function(cardNumber) {
	var first3Digits = cardNumber.slice(0, 3);
	var first4Digits = cardNumber.slice(0, 4);
	var first6Digits = cardNumber.slice(0, 6);

	if(first3Digits >= 624 && first3Digits <= 626 ||
		first4Digits >= 6282 && first4Digits <= 6288 ||
		first6Digits >= 622126 && first6Digits <= 622925) {
		return true;
	}
}

var isSwitch = function(cardNumber) {
	// Create array of valid prefixes belonging to Switch cards.
  	var cardPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
	// Iterate over array of prefixes
	for(let j = 0; j < cardPrefixes.length; j++) {
		// If prefix is at the beginning of cardNumber
		if(cardNumber.indexOf(cardPrefixes[j]) === 0) {
			// return TRUE
			return true;
		}
	}
}