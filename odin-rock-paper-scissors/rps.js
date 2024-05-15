
/* -------------------- Declarations -------------------------- */
let computerScore = 0;
let currentRound = 0;
let playerScore = 0;

// creating buttons
let rockButton = document.getElementById("rockButton");
let paperButton = document.createElement("Paper");
let scissorsButton = document.createElement("Scissors");

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
    let newSelect = document.getElementById("selection").innerHTML = 'H Choice: ' + humanSelect + ' C Choice: ' + compSelect;
    return newSelect;

    
}
// prints current round
function printRound(currentRound) {
    let newRound = document.getElementById("currentRound").innerHTML = 'Current Round: ' + currentRound;
    return newRound;

    
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
    if (humanChoice == "rock" && computerChoice == "rock" ) {
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);
        return console.log("both are rock, it's a tie");
        

    } else if (humanChoice == "rock" && computerChoice == "paper" ) {
        computerScore++;
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("paper beats rock");

    } else if (humanChoice == "rock" && computerChoice == "scissors" ) {
        playerScore++;
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("rock beats scissors");

    } else if (humanChoice == "paper" && computerChoice == "rock" ) {
        playerScore++;
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("paper beats rock");
        
    } else if (humanChoice == "paper" && computerChoice == "paper" ) {
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("both are paper, it's a tie");
        
    } else if (humanChoice == "paper" && computerChoice == "scissors" ) {
        computerScore++;
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("scissors beats paper");
        
    } else if (humanChoice == "scissors" && computerChoice == "rock" ) {
        computerScore++;
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("rock beats scissors");
        
    } else if (humanChoice == "scissors" && computerChoice == "paper" ) {
        playerScore++;
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        //return console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        return console.log("scissors beats paper");
        
    } else if (humanChoice == "scissors" && computerChoice == "scissors" ) {
        console.log("your choice: " + humanChoice + " computer choice: " + computerChoice);

        return console.log("both are scissors, it's a tie");
        //console.log("the current score is: " +  "human: " + playerScore + "Computer: " + computerScore);
        
    } else {
        return console.log("didn't work");
    } 

}
// play game function
function playGame(){

    if (playerScore > computerScore && playerScore == 5) {
        console.log("you win!");
        
    } else if (playerScore < computerScore && computerScore == 5) {
        console.log("you win!");
        
    } else {
        console.log("still goin huh");

    }

}
/* -------------------- buttons -------------------------- */


// rock button
document.getElementById("rockButton").addEventListener("click", function() {
    playRound("rock",getComputerChoice());
    currentRound++;
    printRound(currentRound);
    printStatus("you chose rock! update status");
  });
// paper button
document.getElementById("paperButton").addEventListener("click", function() {
    playRound("paper",getComputerChoice());
    currentRound++;
    printRound(currentRound);
    printStatus("you chose paper! update status");
  });
  // scissors button
  document.getElementById("scissorsButton").addEventListener("click", function() {
    playRound("scissors",getComputerChoice());
    currentRound++;
    printRound(currentRound);
    printStatus("you chose scissors! update status");
  });





// calling functions n stuff
playGame();
