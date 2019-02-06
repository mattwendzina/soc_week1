var playerScore = [0];
var computerScore = [0];

function makeChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomValue = Math.random() * choices.length;
  var initValue = Math.floor(randomValue);
  return choices[initValue];
}

function playGame(move) {
  debugger;
  var PLAYER = move;
  var CPU = makeChoice();
  if (CPU === PLAYER) {
    displayResult("It's a draw");
  } else if (CPU === "rock") {
    if (PLAYER === "paper") {
      playerScore++;
      displayResult("Player wins!");
    } else if (PLAYER === "scissors") {
      computerScore++;
      displayResult("Computer wins!");
    }
  } else if (CPU === "paper") {
    if (PLAYER === "scissors") {
      playerScore++;
      displayResult("Player wins!");
    } else if (PLAYER === "rock") {
      computerScore++;
      displayResult("Computer wins!");
    }
  } else if (CPU === "scissors") {
    if (PLAYER === "rock") {
      playerScore++;
      displayResult("Player wins!");
    } else if (PLAYER === "paper") {
      computerScore++;
      displayResult("Computer wins!");
    }
  }
}

function displayResult(result) {
  var p = document.getElementById("displayResult");
  p.innerText = result;
}

function addScore(num) {
  console.log(num);
}

document.getElementById;
