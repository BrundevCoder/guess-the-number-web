// Guess the number game

const startScreen = document.getElementById("startScreen");
const mainScreen = document.getElementById("mainScreen");
const WinScreen = document.getElementById("winScreen");
const startButton = document.getElementById("start-btn");
const message = document.getElementById("message");
const userInput = document.getElementById("userInput");
const inputButton = document.getElementById("sendGuessBtn");
const restartButton = document.getElementById("refresh-btn");

let guess;
let win = false;
let secretNumber;

// functions

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getUserInput() {
  guess = Number(userInput.value);
  userInput.value = "";
}

function startGame() {
  secretNumber = generateRandomNumber();
  console.log(secretNumber);

  // control the screens
  startScreen.classList.remove("active");
  mainScreen.classList.add("active");
}

function handleWin() {
  WinScreen.classList.add("active");
  mainScreen.classList.remove("active");
}

function handleGame() {

  getUserInput()

  if (guess < secretNumber) {
    message.innerText = `The number is bigger than ${guess}`;
  }
  else if (guess > secretNumber) {
    message.innerText = `The number is lower than ${guess}`;
  }
  else {
    // win
    win = true;
    handleWin();
  }
}

// connect buttons
startButton.addEventListener("click", startGame);
inputButton.addEventListener("click", handleGame);
restartButton.addEventListener("click", () => {
  location.reload();
})