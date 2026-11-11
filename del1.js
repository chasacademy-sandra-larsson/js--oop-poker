class Card {
    constructor(Name, Value){
        this.Name = Name;
        this.Value = Value;

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
            

            /*
            if(i==0){
                name="Spade";
            }
            if(i==1){
                name="Hearts";
            }if(i===2){
                name = "Clover";
            }if(i===3){
                name = "Diamond";
            }*/

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
            /*
            this.cards.forEach((card, i)  =>{
                if(i<11){
                    card.push(new Card(name, i+2));
                }
                if(i===11){
                    card.push(new Card(name, "J"));
                }
                if(i===12){
                    card.push(new Card(name, "Q"));
                }
                if(i===13){
                    card.push(new Card(name, "K"));
                }
                return;
            }); */
            for(let i=1; i<=13; i++){
                this.cards.push(new Card(name, i));
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


