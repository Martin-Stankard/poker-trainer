const { SUIT, VALUE } = require('./enums');


function generateDeck(numberOfDecks, deckName) {

    //if numberOfDecks is falsy, assume default is 5
    if (!numberOfDecks) {
        numberOfDecks = 5
    }
    const deck = {
        deckNames: [],
        cardCount: 0,
        cards: [],
        drawCard: function () {
            if (this.cards.length === 0) {
                console.log('No cards left in the deck');
                return null;
            }
            this.cardCount--;
            return this.cards.pop();
        },
    };

    // Generate all possible unique cards
    for (i = 1; i <= numberOfDecks; i++) {
        deck.deckNames.push("" + i)
        for (const suit in SUIT) {
            for (const value in VALUE) {
                const card = {
                    suit: SUIT[suit],
                    value: VALUE[value],
                    hidden: "" + i,
                };
                deck.cards.push(card);
                deck.cardCount++;
            }
        }

        return deck;
    }
}

module.exports = { generateDeck }
