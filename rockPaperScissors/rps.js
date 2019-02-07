let playerTotalScore = 0;
let computerTotalScore = 0;

// Results Variables
const resultText = document.getElementById("displayResult");
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const computerWins = document.getElementsByClassName("computerWins")[0];
const playerWins = document.getElementsByClassName("playerWins")[0];
// Play again Variables
let playAgain = document.getElementById("playAgain");

function makeChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomValue = Math.random() * choices.length;
  const initValue = Math.floor(randomValue);
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
  resultText.innerText = result;
  computerScore.innerText = computerTotalScore;
  playerScore.innerText = playerTotalScore;
  compareScores();
}

function compareScores() {
  if (playerTotalScore === 5) {
    playerWins.setAttribute("id", "playerWins");
    playAgain.addEventListener("click", resetGame);
  } else if (computerTotalScore === 5) {
    computerWins.setAttribute("id", "computerWins");
    playAgain.addEventListener("click", resetGame);
  } else {
    return;
  }
}

function resetGame() {
  playerWins.removeAttribute("id");
  computerWins.removeAttribute("id");
  playerTotalScore = 0;
  computerTotalScore = 0;
  computerScore.innerText = 0;
  playerScore.innerText = 0;
  p.innerText = "Let's Play!";
}
