console.log("Hello Oa");

const hearts = [
  {
    name: "2 of Hearts",
    value: 2,
    img: ""
  },
  {
    name: "3 of Hearts",
    value: 3,
    img: ""
  },
  {
    name: "4 of Hearts",
    value: 4,
    img: ""
  },
  {
    name: "5 of Hearts",
    value: 5,
    img: ""
  },
  {
    name: "6 of Hearts",
    value: 6,
    img: ""
  },
  {
    name: "7 of Hearts",
    value: 7,
    img: ""
  },
  {
    name: "8 of Hearts",
    value: 8,
    img: ""
  },
  {
    name: "9 of Hearts",
    value: 9,
    img: ""
  },
  {
    name: "10 of Hearts",
    value: 10,
    img: ""
  },
  {
    name: "Jack of Hearts",
    value: 10,
    img: ""
  },
  {
    name: "Queen of Hearts",
    value: 10,
    img: ""
  },
  {
    name: "King of Hearts",
    value: 10,
    img: ""
  },
  {
    name: "Ace of Hearts",
    value: 10,
    img: ""
  }
];

const spades = [
  {
    name: "2 of Spades",
    value: 2,
    img: ""
  },
  {
    name: "3 of Spades",
    value: 3,
    img: ""
  },
  {
    name: "4 of Spades",
    value: 4,
    img: ""
  },
  {
    name: "5 of Spades",
    value: 5,
    img: ""
  },
  {
    name: "6 of Spades",
    value: 6,
    img: ""
  },
  {
    name: "7 of Spades",
    value: 7,
    img: ""
  },
  {
    name: "8 of Spades",
    value: 8,
    img: ""
  },
  {
    name: "9 of Spades",
    value: 9,
    img: ""
  },
  {
    name: "10 of Spades",
    value: 10,
    img: ""
  },
  {
    name: "Jack of Spades",
    value: 10,
    img: ""
  },
  {
    name: "Queen of Spades",
    value: 10,
    img: ""
  },
  {
    name: "King of Spades",
    value: 10,
    img: ""
  },
  {
    name: "Ace of Spades",
    value: 10,
    img: ""
  }
];

const clubs = [
  {
    name: "2 of Clubs",
    value: 2,
    img: ""
  },
  {
    name: "3 of Clubs",
    value: 3,
    img: ""
  },
  {
    name: "4 of Clubs",
    value: 4,
    img: ""
  },
  {
    name: "5 of Clubs",
    value: 5,
    img: ""
  },
  {
    name: "6 of Clubs",
    value: 6,
    img: ""
  },
  {
    name: "7 of Clubs",
    value: 7,
    img: ""
  },
  {
    name: "8 of Clubs",
    value: 8,
    img: ""
  },
  {
    name: "9 of Clubs",
    value: 9,
    img: ""
  },
  {
    name: "10 of Clubs",
    value: 10,
    img: ""
  },
  {
    name: "Jack of Clubs",
    value: 10,
    img: ""
  },
  {
    name: "Queen of Clubs",
    value: 10,
    img: ""
  },
  {
    name: "King of Clubs",
    value: 10,
    img: ""
  },
  {
    name: "Ace of Clubs",
    value: 10,
    img: ""
  }
];

const diamonds = [
  {
    name: "2 of Diamonds",
    value: 2,
    img: ""
  },
  {
    name: "3 of Diamonds",
    value: 3,
    img: ""
  },
  {
    name: "4 of Diamonds",
    value: 4,
    img: ""
  },
  {
    name: "5 of Diamonds",
    value: 5,
    img: ""
  },
  {
    name: "6 of Diamonds",
    value: 6,
    img: ""
  },
  {
    name: "7 of Diamonds",
    value: 7,
    img: ""
  },
  {
    name: "8 of Diamonds",
    value: 8,
    img: ""
  },
  {
    name: "9 of Diamonds",
    value: 9,
    img: ""
  },
  {
    name: "10 of Diamonds",
    value: 10,
    img: ""
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    img: ""
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    img: ""
  },
  {
    name: "King of Diamonds",
    value: 10,
    img: ""
  },
  {
    name: "Ace of Diamonds",
    value: 10,
    img: ""
  }
];

const fullDeck = [...hearts, ...spades, ...clubs, ...diamonds];

console.log(fullDeck.length);
// 52

function shuffleDeck(array) {
  let temp = 0;
  let i = 0;
  let j = 0;
  for (; i < array.length; i++) {
    j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleDeck(fullDeck));
