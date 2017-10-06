let images = [
  "images/curry.jpg",
  "images/curry.jpg",
  "images/iguodala.jpg",
  "images/iguodala.jpg",
  "images/jlin.jpg",
  "images/jlin.jpg",
  "images/johnwall.jpg",
  "images/johnwall.jpg",
  "images/kyrie.jpg",
  "images/kyrie.jpg",
  "images/robinson.jpg",
  "images/timduncan.jpg"
];

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * (deck.length));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

function createBoard() {
  shuffleDeck(images);
  let board = document.getElementById("board");
  for (let i = 0; i < images.length; i++) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", images[i]);
    card.setAttribute("class", "unflipped");
    card.appendChild(image);
  //  card.addEventListener("click", flipCard);
    board.appendChild(card);
  }
}

createBoard();


function playGame() {
  let div_one = document.getElementById("one");
  let div_two = document.getElementById("two");
  let div_three = document.getElementById("three");
  let div_four = document.getElementById("four");

  div_one.addEventListener("click", function() {
    this.classToggle('toggle');
  });
}