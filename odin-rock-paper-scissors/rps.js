
/* -------------------- Declarations -------------------------- */
let computerScore = 0;
let currentRound = 0;
let playerScore = 0;
let currentCompChoice = getComputerChoice();



// testing output
//document.getElementById("humanSelection").innerHTML = 'human selection = ';
//document.getElementById("computerSelection").innerHTML = 'computer selection = ';
//document.getElementById("currentRound").innerHTML = "current round: " + currentRound;
// document.getElementById("currentScore").innerHTML = "Current Score = " + "human: " + playerScore + " computer: " + computerScore;

/* -------------------- Function Declairations -------------------------- */

// update status function
function printStatus(currentStatus) {
    let newStatus = document.getElementById("status").innerHTML = currentStatus;
    return newStatus;
}
// prints selection
function printSelection(humanSelect, compSelect) {
    let newSelect = document.getElementById("selection").innerHTML = 'Player: ' + humanSelect + ' Computer: ' + compSelect;
    return newSelect;
}
// prints current round
function printRound(currentRound) {
    let newRound = document.getElementById("currentRound").innerHTML = 'Current Round: ' + currentRound;
    return newRound;

    
}
// print current score
function printScore(hScore, computerScore) {
    let newScore = document.getElementById("currentScore").innerHTML = 'Score: ' + 'player: ' + playerScore + ' computer: ' + computerScore;
    return newScore;

    
}
// Computers Choice = spits out r,p, or s
function getComputerChoice(){
    let r = "rock"
    let p = "papper"
    let s = "scissors"
    let a = 1;

    //Math.random()
    let x = Math.floor((Math.random() * 3) + 1);

    if (x == 1){
        return "rock";
    } else if (x == 2){
        return "papper";
    } else if (x == 3){
        return "scissors";
    } else{
        // return x;

    }

}
// Human Choice = taking human input
function getHumanChoice(){
    x = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
    return x;
}
 // logic for a round
 function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock" ) {
        printScore(playerScore, computerScore);
        printStatus("both are rock, it's a tie");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;

    } else if (humanChoice === "rock" && computerChoice === "paper" ) {
        computerScore++;
        printScore(playerScore, computerScore);
        printStatus("paper beats rock");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;

    } else if (humanChoice === "rock" && computerChoice == "scissors" ) {
        playerScore++;
        printScore(playerScore, computerScore);
        printStatus("rock beats scissors");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;

    } else if (humanChoice === "paper" && computerChoice === "rock" ) {
        playerScore++;
        printScore(playerScore, computerScore);
        printStatus("paper beats rock");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;
        
    } else if (humanChoice == "paper" && computerChoice == "paper" ) {
        printScore(playerScore, computerScore);
        printStatus("both are paper, it's a tie");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;
        
    } else if (humanChoice == "paper" && computerChoice == "scissors" ) {
        computerScore++;
        printScore(playerScore, computerScore);
        printStatus("scissors beats paper");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;
        
    } else if (humanChoice == "scissors" && computerChoice == "rock" ) {
        computerScore++;
        printScore(playerScore, computerScore);
        printStatus("rock beats scissors");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;
        
    } else if (humanChoice == "scissors" && computerChoice == "paper" ) {
        playerScore++;
        printScore(playerScore, computerScore);
        printStatus("scissors beats paper");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;
        
    } else if (humanChoice == "scissors" && computerChoice == "scissors" ) {
        printScore(playerScore, computerScore);
        printStatus("both are scissors, it's a tie");
        printSelection(humanChoice, computerChoice);
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return ;        
    } else {
        printStatus("oops! something went wrong!");
        printSelection(humanChoice, computerChoice);
        console.log("error in playround");
        return ;
    }


}
// play game function
function playGame(playerScore, computerScore){

    if (playerScore > computerScore && playerScore == 5) {
       console.log("you win!");
       printStatus("you win!");
       return ;
    } else if (playerScore < computerScore && computerScore == 5) {
        console.log("you loose!");
        printStatus("you win!");
        return ;


    } else {
        return ;
    }

}
/* -------------------- buttons -------------------------- */


// rock button
document.getElementById("rockButton").addEventListener("click", function() {
    playRound("rock",getComputerChoice());
    playGame(playerScore, computerScore);
    currentRound++;
    printRound(currentRound);
    //printStatus("you chose rock! update status");
  });
// paper button
document.getElementById("paperButton").addEventListener("click", function() {
    playRound("paper",getComputerChoice());
    playGame(playerScore, computerScore);
    currentRound++;
    printRound(currentRound);
    //printStatus("you chose paper! update status");
  });
  // scissors button
  document.getElementById("scissorsButton").addEventListener("click", function() {
    playRound("scissors",getComputerChoice());
    playGame(playerScore, computerScore);
    currentRound++;
    printRound(currentRound);
    //printStatus("you chose scissors! update status");
  });





// calling functions n stuff
playGame();
