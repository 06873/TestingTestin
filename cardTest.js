function displayDeck(winner,deck){
    document.getElementById("winningPlayer").innerHTML = winner;
    document.getElementById("noOfCards").innnerHTML = deck.length;
    let deckHTML = "<table><tr>"
    for (let i = deck.length-1; i = 0; i--){

    }
}

function pickCards(deck){
    const playerOneCards = [];
    const playerTwoCards = [];
    let i = 1;
    while (i < deck.length){
        if (deck[i-1].colour == deck[i].colour){
            if (deck[i-1].value > deck[i].value){
                playerOneCards.push({colour:deck[i-1].colour,value:deck[i-1].value});
                playerOneCards.push({colour:deck[i].colour,value:deck[i].value});
            }else{
                playerTwoCards.push({colour:deck[i-1].colour,value:deck[i-1].value});
                playerTwoCards.push({colour:deck[i].colour,value:deck[i].value});
            }
        }
    }
    if (playerOneDeck.length > playerTwoCards.length){
        displayDeck("Player One",playerOneDeck)
    }else{
        displayDeck("Player Two",playerTwoDeck)
    }
}