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
}
/*
const organizedCards = new Deck();
// Caused error where it gave undefined at the end: console.log(`Organized cards: ${organizedCards.printDecks()}`);
console.log("Organized cards:");
organizedCards.printDecks();
*/

const shuffledCards = new Deck();
shuffledCards.shuffle();
console.log("Shuffled Cards");
shuffledCards.printDecks();

class Player {
    constructor(name){
        this.name=name;
        this.hand=[];
    }
    receiveCard(card){
        this.hand.push(card);
        
    }
    getHandValue(){
        return this.hand.reduce((total, card) => total + card.Value)
    }
}



