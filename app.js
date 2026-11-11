// ========== DEL 1 ==========
class Card {
  constructor(suit, name, value) {
    this.suit = suit;
    this.name = name;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    let suits = ["Hjärter", "Ruter", "Klöver", "Spader"];
    let names = [
      "Ess",
      "Kung",
      "Dam",
      "Knekt",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
    let values = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    for (let suit of suits) {
      for (let i = 0; i < names.length; i++) {
        this.cards.push(new Card(suit, names[i], values[i]));
      }
    }
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let slump = Math.floor(Math.random() * this.cards.length);
      let temp = this.cards[i];
      this.cards[i] = this.cards[slump];
      this.cards[slump] = temp;
    }
  }

  draw() {
    return this.cards.pop();
  }

  count() {
    return this.cards.length;
  }

  print() {
    for (let card of this.cards) {
      console.log(card.suit + " " + card.name + " (värde: " + card.value + ")");
    }
  }
}

// Skapa leken (52 kort)
let deck = new Deck();

// Skriv ut den obl
console.log("=== OBLANDAD ===");
deck.print();

// Blanda leken
deck.shuffle();

// Skriv ut den blandade
console.log("=== BLANDAD ===");
deck.print();

// ========== DEL 2 ==========
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
}

let slim = new Player("Slim");
let luke = new Player("Luke");

// Dela ut 5 kort var
for (let i = 0; i < 5; i++) {
  slim.hand.push(deck.draw());
  luke.hand.push(deck.draw());
}

// Skriv ut kortleken som är kvar
console.log("=== KORTLEK (" + deck.count() + " kort kvar) ===");
deck.print();

// Skriv ut spelarna
console.log("=== SLIM ===");
for (let card of slim.hand) {
  console.log(card.suit + " " + card.name + " (värde: " + card.value + ")");
}

console.log("=== LUKE ===");
for (let card of luke.hand) {
  console.log(card.suit + " " + card.name + " (värde: " + card.value + ")");
}

// Summera
let slimSumma = 0;
for (let card of slim.hand) {
  slimSumma = slimSumma + card.value;
}

let lukeSumma = 0;
for (let card of luke.hand) {
  lukeSumma = lukeSumma + card.value;
}

// Skriv ut summorna (saknades i din kod)
console.log("=== SUMMA ===");
console.log(slim.name + ": " + slimSumma);
console.log(luke.name + ": " + lukeSumma);

// ========== DEL 3 ==========

// Kasthög
let discards = [];

// Slim slänger 2 kort
discards.push(slim.hand.pop());
discards.push(slim.hand.pop());

// Luke slänger 2 kort
discards.push(luke.hand.pop());
discards.push(luke.hand.pop());

// Båda drar 2 nya kort
slim.hand.push(deck.draw());
slim.hand.push(deck.draw());

luke.hand.push(deck.draw());
luke.hand.push(deck.draw());

// Skriv ut kortleken (38 kort kvar)
console.log("=== KORTLEK (" + deck.count() + " kort kvar) ===");
deck.print();

// Skriv ut spelarna
console.log("=== SLIM ===");
for (let card of slim.hand) {
  console.log(card.suit + " " + card.name + " (värde: " + card.value + ")");
}

console.log("=== LUKE ===");
for (let card of luke.hand) {
  console.log(card.suit + " " + card.name + " (värde: " + card.value + ")");
}

// Räkna ut nya summor
let slimSumma2 = 0;
for (let card of slim.hand) {
  slimSumma2 = slimSumma2 + card.value;
}

let lukeSumma2 = 0;
for (let card of luke.hand) {
  lukeSumma2 = lukeSumma2 + card.value;
}

console.log("=== SUMMA ===");
console.log(slim.name + ": " + slimSumma2);
console.log(luke.name + ": " + lukeSumma2);

// ========== DEL 4 ==========

// Spelarna slänger alla sina kort i kasthögen
while (slim.hand.length > 0) {
  discards.push(slim.hand.pop());
}

while (luke.hand.length > 0) {
  discards.push(luke.hand.pop());
}

// Flytta alla kort från kasthögen tillbaka till leken
while (discards.length > 0) {
  deck.cards.push(discards.pop());
}

// Blanda leken igen
deck.shuffle();

// Kontroll: antal kort
console.log("=== ANTAL KORT ===");
console.log("Kortlek: " + deck.count());
console.log("Slim: " + slim.hand.length);
console.log("Luke: " + luke.hand.length);
console.log("Kasthög: " + discards.length);

// Skriv ut den blandade leken
console.log("=== BLANDAD KORTLEK ===");
deck.print();
