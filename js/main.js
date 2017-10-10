let guessAttempts = [];
let playerLives = 8;
let score = 0;
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
  lives.push("images/basketball.jpg");
}
let tryAgain = document.getElementById("tryAgain");
let won = document.getElementById("won");



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
  tryAgain.style.visibility = "hidden";
  won.style.visibility = "hidden";
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
    this.classList.remove("unflipped");
    guessAttempts.push(this);
    console.log(guessAttempts);
  } else if (guessAttempts.length === 1) {
    this.classList.remove("unflipped");
    guessAttempts.push(this);
    setTimeout(resetAttempts, 500);
  }
}

function resetAttempts() {
  if (guessAttempts[0].innerHTML === guessAttempts[1].innerHTML) {
    guessAttempts[0].removeEventListener("click", flipCard);
    guessAttempts[1].removeEventListener("click", flipCard);
    score++;
    // hmm, need to reset the array back to zero, even if successful....why??
    guessAttempts = [];
    if (score ===8) {
      won.style.visibility = "visible";
    }
  }
  else {
    for (let i = 0; i < guessAttempts.length; i++) {
      guessAttempts[i].classList.add("unflipped");
    }
    livesLeft.removeChild(document.getElementById("livesLeft").getElementsByTagName("img")[0]);
    playerLives--;
    // reset array
    guessAttempts = [];


    if (playerLives === 0) {
      tryAgain.style.visibility = "visible";
    }
  }
}
