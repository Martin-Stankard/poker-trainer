//think eventually an express server here, running from docker compose up.
const { generateDeck } = require('./cards/Deck')
//start with 5 decks, 
// Usage example
const myDeck = generateDeck();

console.log(myDeck.cardCount); // Output: 52
console.log(myDeck.deckNames);

console.log(myDeck.drawCard())

//run through sorted counting check, 

//run through shuffle counting check


//Assume 5 