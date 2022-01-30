const computerCardSlot = document.querySelector('.computer-card-slot')
const playerCardSlot = document.querySelector('.player-card-slot')
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerDeck, computerDeck

class Deck {
    constructor(cards = freshDeck()){
        this.cards=cards
    }
    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        // the reason thid.numberOfCards -1 is, it start counting from 0. deck is 52
        for(let i= this.numberOfCards -1; i>0;i--){
            //making newIndex which is gonna be the one who got switched with current card[i]
            //the reason i+1 is, make it back to current number it supposed to be.
            //ex)random)0.999 * 52 = 51.948  floor it then 51
            const newIndex = Math.floor(Math.random()*(i + 1))
            //preserve newIndex card on oldValue variable
            const oldValue = this.cards[newIndex]
            //switching process 1. card.newIndex change its value to card[i] 
            this.cards[newIndex] = this.cards[i]
            //switching process 2. card[i] change its value to oldValue
            this.cards[i] = oldValue
        }
    }
}



startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()
    //in case number of cards is 51 or some odd, i can split nearly even for two by using Math.ceil
    //Math.ceil bring up to nearest positive side num. ex)1.09 => 2 , -1.99 => -1
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    //.slice(begining, endPoint) both index but endPoint is exclusive because originally it is set to length
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    //slice takes first callback as index 0, so 2nd callback can be length
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    console.log(playerDeck)
    console.log(computerDeck)

    cleanBeforeRound()
}


function cleanBeforeRound() {
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    text.innerHTML = ""

    upDateDeckCount()
}

function upDateDeckCount() {
    computerDeckElement.innerHTML = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}