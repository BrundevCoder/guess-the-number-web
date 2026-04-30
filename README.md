# Guess The number in web!

## How to play 👾
First you click on the start Button, then the website prompts you to you try to guess the secret number randomly choosen, you can try how many times you want. As many people requested, I added an attempt counter, and also the functionality to press the Enter key (only in computers) instead of only being able to try by clicking the 'Try!' button.

## Design
I tried to improve the design, such as by adding a new font and changing some other elements, like the new green background 🟢, and give it a pixelated vibe, and also changing the color of other things.

## Why did I create this??
Well, i created because i was trying to manipulate the DOM of the webpage, i enjoy trying someting new. I'm liking to go ahead with this project

## What does each function in `script.js` do?
- `generateRandomNumber(mode)`: Depending on the mode passed, it returns the value of the secret number!
- `handleMode()`: This function is new! It sets each variable according to the game mode, such as lives and other information via the UI
- `getUserInput()`: This function takes the input, changes it to a variable called `guess`, and sets the user's input field to empty
- `startGame()`: This function is responsible for starting the game correctly by controlling the screens that should appear at the beginning
- `handleWin()` and `handleLose()`: They control their own screens
- `handleGame()`: The function that makes the game work correctly! It decides what to do with your guess.

## Summary of the new update:
In this update, I prefer to increase the difficulty level of this project, challenging myself to include different game difficulties and more!

- Game modes (easy, medium, hard) with a info box
- A life system tailored to each game mode
- Auto focus on input as soon as the game starts
- Secret (perform a specific action X times and gain 15 lives!)

# key:

`Enter` just to send your guess.
