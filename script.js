let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputbox");
let audio = new Audio("music.mp3");
let music = new Audio("music.mp3");
let win = new Audio("winner.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  //   console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("firstpage").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

//reload the page
const newGameBegin = () => {
  music.play();
  window.location.reload();
};

//start new game
const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

//main logic of our app
const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputbox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is High😱";
      userNumberUpdate.value = "";
      music.play();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is Low 😒";
      userNumberUpdate.value = "";
      music.play();
    } else {
      userGuessUpdate.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      winner.play();
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}😔`;
      userNumberUpdate.value = "";
      music.play();
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}😔`;
      userNumberUpdate.value = "";
      music.play();
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      winner.play();
      startNewGame();
    }
  }
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  music.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  music.play();
  maxGuess = 5;
  startGame();
};