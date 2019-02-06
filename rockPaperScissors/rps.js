var playerScore = 0;
var computerScore = 0;

function makeChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomValue = Math.random() * choices.length;
  var initValue = Math.floor(randomValue);
  return choices[initValue];
}

function playGame(move) {
  var PLAYER = move;
  var CPU = makeChoice();
  if (CPU === PLAYER) {
    displayResult("It's a draw");
  } else if (CPU === "rock") {
    if (PLAYER === "paper") {
      displayResult("Player wins!");
    } else if (PLAYER === "scissors") {
      displayResult("Computer wins!");
    }
  } else if (CPU === "paper") {
    if (PLAYER === "scissors") {
      displayResult("Player wins!");
    } else if (PLAYER === "rock") {
      displayResult("Computer wins!");
    }
  } else if (CPU === "scissors") {
    if (PLAYER === "rock") {
      displayResult("Player wins!");
    } else if (PLAYER === "paper") {
      displayResult("Computer wins!");
    }
  }
}

function displayResult(result) {
  var p = document.getElementById("displayResult");
  p.innerText = result;
}

document.getElementById;
