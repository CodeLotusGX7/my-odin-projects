let humanScore = 0;
let computerScore = 0;

// Computer Choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Human Choice
function getHumanChoice() {
  userInput = prompt("Rock or Paper or Scissors ?").toLowerCase();
  return userInput;
}

// One Round
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return "You win Rock beats Scissors";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    return "You are both Rock, tie";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "You win Paper beats Rock";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    return "You are both Paper, tie";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return "You win Scissors beats Paper";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    return "You are both Scissors, tie";
  } else {
    return "Wrong Input";
  }
}
function playGame() {
  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore + " " + computerScore);
  }
  if (humanScore > computerScore) {
    console.log(
      "Final Score is:\n" + humanScore + "-" + computerScore + "\nYou win"
    );
  } else if (humanScore < computerScore) {
    console.log(
      "Final Score is:\n" + humanScore + "-" + computerScore + "\nYou lose"
    );
  } else {
    console.log(
      "Final Score is:\n" + humanScore + "-" + computerScore + "\nNo winner"
    );
  }
}
playGame();