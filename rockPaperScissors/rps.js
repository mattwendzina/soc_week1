var playerTotalScore = 0;
var computerTotalScore = 0;

function makeChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomValue = Math.random() * choices.length;
  var initValue = Math.floor(randomValue);
  return choices[initValue];
}

function playGame(move) {
  // debugger;
  var PLAYER = move;
  var CPU = makeChoice();
  if (CPU === PLAYER) {
    displayResult("It's a draw");
  } else if (CPU === "rock") {
    if (PLAYER === "paper") {
      playerTotalScore++;
      displayResult("Player wins!");
    } else if (PLAYER === "scissors") {
      computerTotalScore++;
      displayResult("Computer wins!");
    }
  } else if (CPU === "paper") {
    if (PLAYER === "scissors") {
      playerTotalScore++;
      displayResult("Player wins!");
    } else if (PLAYER === "rock") {
      computerTotalScore++;
      displayResult("Computer wins!");
    }
  } else if (CPU === "scissors") {
    if (PLAYER === "rock") {
      playerTotalScore++;
      displayResult("Player wins!");
    } else if (PLAYER === "paper") {
      computerTotalScore++;
      displayResult("Computer wins!");
    }
  }
}

function displayResult(result) {
  var p = document.getElementById("displayResult");
  p.innerText = result;
  var computerScore = document.getElementById("computerScore");
  computerScore.innerText = computerTotalScore;
  var playerScore = document.getElementById("playerScore");
  playerScore.innerText = playerTotalScore;
  if (playerTotalScore === 5) {
    playerTotalScore = 0;
    computerTotalScore = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    p.innerText = "Let's Play!";
    alert("Player wins!");
  } else if (computerTotalScore === 5) {
    playerTotalScore = 0;
    computerTotalScore = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    p.innerText = "Let's Play!";
    alert("Computer wins!");
  } else {
    return;
  }
}

function addScore(num) {
  console.log(num);
}

document.getElementById;
