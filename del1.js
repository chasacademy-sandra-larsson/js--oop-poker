class Card {
    constructor(Suit, Value, Name){
        this.Suit=Suit;
        this.Value = Value;
        this.Name = Name;


    }
    printCard(){
        console.log(`This name: ${this.Name}`);
        console.log(`This value: ${this.Value}`);
        console.log(`This Color: ${this.Suit}`);
    }

}

class Deck {
    constructor (){
        this.cards=[];

        for(let i=0; i<4; i++){
            let suit;
            let name;

            switch (i){
                case 0: 
                    suit="Spade";
                    break;
                case 1: 
                    suit = "Hearts";
                    break;
                case 2: 
                    suit = "Clover";
                    break;
                case 3:
                    suit = "Diamonds";
                    break;
                default:
                    return suit;
            }
            for(let j=1; j<=13; j++){
                switch(j){
                    case 1: 
                        name="Ace";
                        break;
                    case 2:
                        name="Two";
                        break;
                    case 3: 
                        name="Three";
                        break;
                    case 4:
                        name="Four";
                        break;
                    case 5: 
                        name="Five";
                        break;
                    case 6:
                        name="Six";
                        break;
                    case 7:
                        name="Seven";
                        break;
                    case 8:
                        name="Eight";
                        break;
                    case 9:
                        name="Nine";
                        break;
                    case 10:
                        name="Ten";
                        break;
                    case 11:
                        name="Jack";
                        break;
                    case 12:
                        name="Queen";
                        break;
                    case 13:
                        name="King";
                        break;
                    default:
                        return name;
                }
            this.cards.push(new Card(suit, j, name));
            }
        }    
    }
    printDecks(){
        this.cards.forEach(card => {
            console.log(card);
        })
    }
    shuffle(){
        //Using Fisher Yates Array
        const Arr = this.cards;

        //Start from the last element and swap
        //one by one. We don't need to run for
        //the first element thats why i>0
        for (let i = Arr.length - 1; i > 0; i--){
            //Pick a random index from 0 to i inclusive
            let j = Math.floor(Math.random() * (i+1));

            //swap arr[i] with the element at random index
            [Arr[i], Arr[j]] = [Arr[j], Arr[i]];

        }
    }
    dealCard(){
        return this.cards.pop();
    }
    collectDiscardPile(discardPile){
        while(discardPile.length > 0){
            this.cards.push(discardPile.pop());
        }
    }
}


class Player {
    constructor(name){
        this.name=name;
        this.hand=[];
    }
    receiveCard(card){
        this.hand.push(card);
        
    }
    getHandValue(){
        return this.hand.reduce((total, card) => total + card.Value, 0);
    }
    discardAll(discardPile){
        while(this.hand.length > 0){
            discardPile.push(this.hand.pop());
        }
    }
    discardCards(count, discardPile){
        for(let i = 0; i < count; i++){
            if(this.hand.length > 0) {
                discardPile.push(this.hand.pop());
            }
        }
    }
}
/*
const organizedCards = new Deck();
// Caused error where it gave undefined at the end: console.log(`Organized cards: ${organizedCards.printDecks()}`); */



//Skapa och blanda
const deck = new Deck();
const discardPile = [];

console.log("Organized cards:");
deck.printDecks();

deck.shuffle();
console.log("Shuffled Cards");
deck.printDecks();


const slim = new Player("Slim");
const luke = new Player("Luke");
console.log(slim);
console.log(luke);

//Dela ut 5 kort vardera till spelarna
for(let i= 0; i<5; i++){
    slim.receiveCard(deck.dealCard());
    luke.receiveCard(deck.dealCard());
}

//Skriva ut kortleken, där 42 kort är kvar, spelarna har 5 kort var och totalvärdet
console.log(`\nKortleke nefter utdelning ${deck.cards.length} kort var:`);
deck.printDecks();

console.log("\nSpelare efter utdelning:");
console.log(slim);
console.log(`SLims handvärde: ${slim.getHandValue()}`);

console.log(luke);
console.log(`Lukes handvärde: ${luke.getHandValue()}`);

//Del 3
slim.discardCards(2, discardPile);
luke.discardCards(2, discardPile);

for(let i = 0; i<2; i++){
    slim.receiveCard(deck.dealCard());
    luke.receiveCard(deck.dealCard());
}

//Del 4 
slim.discardAll(discardPile);
luke.discardAll(discardPile);

// 2. Flytta alla kort från kasthögen tillbaka till kortleken (nu 52 kort i leken, 0 i kasthögen)
deck.collectDiscardPile(discardPile);

// 3. Verifiera antal kort och blanda kortleken igen
console.log(`Slims kort: ${slim.hand.length}`);
console.log(`Lukes kort: ${luke.hand.length}`);
console.log(`Kasthögens kort: ${discardPile.length}`);
console.log(`Kortlekens kort: ${deck.cards.length}`);

deck.shuffle();
console.log("\nÅterställd och nyblandad kortlek:");
deck.printDecks();