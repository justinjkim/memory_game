let guessAttempts = [];
let playerLives = 8;
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
let lives = [];
for (let i = 0; i < 8; i++) {
  lives.push("images/basketball.png");
}
console.log(lives);

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

function createLives() {
  let livesLeft = document.getElementById("livesLeft");
  for (let i = 0; i < lives.length; i++) {
    let life = document.createElement("img");
    life.setAttribute("src", lives[i]);
    livesLeft.append(life);
  }
}
createLives();


function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * (deck.length));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

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
    setTimeout(resetAttempts, 500);
  }
}

function resetAttempts() {
  if (guessAttempts[0].innerHTML === guessAttempts[1].innerHTML) {
    console.log("Nice, we found a match!");
    guessAttempts[0].removeEventListener("click", flipCard);
    guessAttempts[1].removeEventListener("click", flipCard);

    // hmm, need to reset the array back to zero, even if successful....why??
    guessAttempts = [];

  } else {
    console.log("Sorry, no match!");
    for (let i = 0; i < guessAttempts.length; i++) {
      guessAttempts[i].classList.remove("clicked");
      guessAttempts[i].classList.add("unflipped");
    }
    livesLeft.removeChild(document.getElementById("livesLeft").getElementsByTagName("img")[0]);
    // reset array
    guessAttempts = [];


    if (playerLives === 0) {
      // need to add logic to restart the game
    }
  }
}
