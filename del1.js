class Card {
    constructor(Name, Value, Color){
        this.Name = Name;
        this.Value = Value;
        this.Color=Color;

    }
    printCard(){
        console.log(`This name: ${this.Name}`);
        console.log(`This value: ${this.Value}`);
        console.log(`This Color: ${this.Color}`);
    }

}

class Deck {
    constructor (){
        this.cards=[];

        for(let i=0; i<4; i++){
            let name;
            let color;

            switch (i){
                case 0: 
                    name="Spade";
                    break;
                case 1: 
                    name = "Hearts";
                    break;
                case 2: 
                    name = "Clover";
                    break;
                case 3:
                    name = "Diamonds";
                    break;
                default:
                    return name;
            }
            if(i%2===0){
                color="Black";
            }
            if(i%2===1){
                color="Red";
            }
            
            for(let i=1; i<=13; i++){
                this.cards.push(new Card(name, i, color));
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
const organizedCards = new Deck();
console.log(`Organized cards: ${organizedCards.printDecks()}`);


const shuffledCards = new Deck();
shuffledCards.shuffle();
console.log(`Shuffled cards: ${shuffledCards.printDecks()}`);




