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

// new

const modeScreen = document.getElementById("modeScreen");
const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn");

const detailsButton = document.getElementById("seeDetails");
const details = document.getElementById("detailsDrop")

const maxNumberDisplay = document.getElementById("maxNumber");
const modeDisplay = document.getElementById("modeDisplay");

const lostScreen = document.getElementById("lostScreen");
const livesDisplay = document.getElementById("livesDisplay");
const restartBtnTow = document.getElementById("refresh-btn2");

const secretButton = document.getElementById("secretButton");
const secretDisplay = document.getElementById("secretDisplay");

let clicks = 0;
let showing = false;
let guess;
let win = false;
let secretNumber;
let mode = "";
let tries = 0;
let lives = 0;

// functions

function generateRandomNumber(mode) {
  if (mode === "easy") {
    return Math.floor(Math.random() * 50);
  }
  else if (mode === "medium") {
    return Math.floor(Math.random() * 100);
  }
  else if (mode === "hard") {
    return Math.floor(Math.random() * 500);
  }
  else {
    return Math.floor(Math.random() * 100);
  }
}

function handleMode(modeType) {
  // set mode variable to the given argument
  const modeMaxInfo = {
    easy: 50,
    medium: 100,
    hard: 500,
  };

  mode = modeType;

  let max = 0;

  mode === "easy" ? max = modeMaxInfo["easy"] : max = max;
  mode === "medium" ? max = modeMaxInfo["medium"] : max = max;
  mode === "hard" ? max = modeMaxInfo["hard"] : max = max;

  lives = ( modeMaxInfo[mode] / 10 ) * 2

  modeDisplay.innerText = mode.charAt(0).toUpperCase() + mode.slice(1);

  modeDisplay.classList.add(mode);

  modeScreen.classList.remove("active");
  startScreen.classList.add("active");

  maxNumberDisplay.innerText = max;
}

function getUserInput() {
  guess = Number(userInput.value);
  userInput.value = "";
}

function startGame() {
  secretNumber = generateRandomNumber(mode);

  // control the screens
  startScreen.classList.remove("active");
  mainScreen.classList.add("active");

  userInput.focus();
}

function handleWin() {
  WinScreen.classList.add("active");
  mainScreen.classList.remove("active");
}

function handleLose() {
  lostScreen.classList.add("active")
  mainScreen.classList.remove("active")
}

function handleGame() {

  getUserInput()

  if (guess < secretNumber) {
    message.innerText = `The number is bigger than ${guess}`;
    tries++;
    lives--;
    firstTriesDisplay.innerText = `Tries: ${tries}`;
    finalEndTries.innerHTML = `Tries: ${tries}`;
  }
  else if (guess > secretNumber) {
    message.innerText = `The number is lower than ${guess}`;
    tries++;
    lives--;
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

  if (lives === 0) {
    handleLose()
  }

  livesDisplay.innerText = lives;
}

// connect buttons
startButton.addEventListener("click", () => {
  startGame();
  livesDisplay.innerText = lives;
});
inputButton.addEventListener("click", handleGame);
userInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    handleGame();
  }
});
restartButton.addEventListener("click", () => {
  location.reload();
})
restartBtnTow.addEventListener("click", () => {
  location.reload();
})

// mode buttons
easyBtn.addEventListener("click", () => {
  handleMode("easy");
})
mediumBtn.addEventListener("click", () => {
  handleMode("medium");
})
hardBtn.addEventListener("click", () => {
  handleMode("hard");
})

detailsButton.addEventListener("click", () => {
  details.classList.toggle("visible");
})
secretButton.addEventListener("click", () => {
  clicks++;
  console.log(clicks)

  if (clicks >= 50) {
    if (showing) {
      return;
    }

    lives += 15;
    livesDisplay.innerText = lives;
    
    secretDisplay.style.visibility = "visible";
    showing = true;

    setTimeout(() => {
      secretDisplay.style.visibility = "hidden";
      showing = false;
      clicks = 0;
    }, 1000);

    // reset clicks
    clicks = 0;
  }
})