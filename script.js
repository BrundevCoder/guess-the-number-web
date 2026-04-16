// Guess the number game

const startScreen = document.getElementById("startScreen");
const mainScreen = document.getElementById("mainScreen");
const WinScreen = document.getElementById("winScreen");
const startButton = document.getElementById("start-btn");
const message = document.getElementById("message");
const userInput = document.getElementById("userInput");
const inputButton = document.getElementById("sendGuessBtn");
const restartButton = document.getElementById("refresh-btn");
const firstTriesDisplay = document.getElementById("triesDisplay");
const finalEndTries = document.getElementById("endTries");

let guess;
let win = false;
let secretNumber;
let tries = 0;

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
    tries++;
    firstTriesDisplay.innerText = `Tries: ${tries}`;
    finalEndTries.innerHTML = `Tries: ${tries}`;
  }
  else if (guess > secretNumber) {
    message.innerText = `The number is lower than ${guess}`;
    tries++;
    firstTriesDisplay.innerText = `Tries: ${tries}`;
    finalEndTries.innerHTML = `Tries: ${tries}`;
  }
  else {
    tries++;
    firstTriesDisplay.innerText = `Tries: ${tries}`;
    finalEndTries.innerHTML = `Tries: ${tries}`;
    // win
    win = true;
    handleWin();
  }
}

// connect buttons
startButton.addEventListener("click", startGame);
inputButton.addEventListener("click", handleGame);
userInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    handleGame();
  }
});
restartButton.addEventListener("click", () => {
  location.reload();
})
