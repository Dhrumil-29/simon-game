let body = document.querySelector("body");
let title = document.querySelector("#title");

let gameSq = [];
let userSq = [];

let gameStarted = false;
let level = 1;

function nextLevel() {
  level++;
  title.innerHTML = `Level ${level}`;
  userSq = [];
  nextGameSeq();
}

let userClick = function () {
  // check with game sequence
  if (gameStarted) {
    userSq.push(parseInt(this.innerHTML));
    if (gameSq[userSq.length - 1] != userSq[userSq.length - 1]) {
      gameOver();
    } else if (userSq.length === gameSq.length) {
      nextLevel();
    }
  }
};

function resetValue() {
  level = 1;
  gameSq = [];
  userSq = [];
  gameStarted = false;
}

function gameOver() {
  body.classList.add("game-over");
  title.innerHTML = `Game Over!!! <br> Your score is ${level}...<br> Press any key for start game`;

  resetValue();
}

for (box of document.querySelector(".container").children) {
  box.addEventListener("click", userClick);
}

function generateSequence() {
  return Math.floor(Math.random() * 3);
}

function nextGameSeq() {
  let randomNumber = generateSequence();
  let container = document.querySelector(".container");
  // flash for one scecond
  gameSq.push(randomNumber + 1);

  let randomBox = container.children[randomNumber];
  randomBox.classList.add("click");

  setTimeout(() => {
    randomBox.classList.remove("click");
  }, 500);
}

body.addEventListener("keypress", () => {
  if (!gameStarted) {
    body.classList.remove("game-over");
    gameStarted = true;
    title.innerHTML = `Level ${level}`;
    nextGameSeq();
  }
});
