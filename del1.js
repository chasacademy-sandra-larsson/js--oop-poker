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
}

const card1 = new Deck();
card1.printDecks();


