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
  "images/robinson.jpg",
  "images/timduncan.jpg",
  "images/timduncan.jpg",
  "images/lebron.jpg",
  "images/lebron.jpg"
];

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * (deck.length));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}



let guessAttempts = [];

function flipCard() {
  if (guessAttempts.length === 0) {
    this.classList.add("clicked");
    this.classList.remove("unflipped");
    guessAttempts.push(this);
    console.log(guessAttempts);
  } else if (guessAttempts.length === 1) {
    this.classList.add("clicked");
    this.classList.remove("unflipped");
    guessAttempts.push(this);
    setTimeout(resetAttempts, 300);
  }
}

function resetAttempts() {
  if (guessAttempts[0].innerHTML === guessAttempts[1].innerHTML) {
    console.log("Nice, we found a match!");
    console.log(guessAttempts);
  } else {
    console.log("Sorry, no match!");
    for (let i = 0; i < guessAttempts.length; i++) {
      guessAttempts[i].classList.remove("clicked");
      guessAttempts[i].classList.add("unflipped");
    }
    guessAttempts = [];
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
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  }
}
createBoard();

// might not need this for now
// function playGame() {
//   let div_one = document.getElementById("one");
//   let div_two = document.getElementById("two");
//   let div_three = document.getElementById("three");
//   let div_four = document.getElementById("four");
//
//   div_one.addEventListener("click", function() {
//     this.classToggle('toggle');
//   });
// }
