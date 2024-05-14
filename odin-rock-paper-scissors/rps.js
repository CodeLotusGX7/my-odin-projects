// Declaration
let humanScore = 0;
let computerScore = 0;

// creating buttons
let rockButton = document.getElementById("rockButton");
let paperButton = document.createElement("Paper");
let scissorsButton = document.createElement("Scissors");

// rock button
document.getElementById("rockButton").addEventListener("click", function() {
    
    console.log("you chose rock!")    
    playRound("rock",);
  });

// paper button
  document.getElementById("paperButton").addEventListener("click", function() {
    myFunction();
  });
  // scissors button
  document.getElementById("scissorsButton").addEventListener("click", function() {
    myFunction();
  });

  ///
  function myFunction() {
    console.log("this button was clicked"); 
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
        return console.log("both are rock, it's a tie");

    } else if (humanChoice == "rock" && computerChoice == "paper" ) {
        computerScore++;
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "paper beats rock";

    } else if (humanChoice == "rock" && computerChoice == "scissors" ) {
        humanScore++;
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "rock beats scissors";

    } else if (humanChoice == "paper" && computerChoice == "rock" ) {
        humanScore++;
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "paper beats rock";
        
    } else if (humanChoice == "paper" && computerChoice == "paper" ) {
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "both are paper, it's a tie";
        
    } else if (humanChoice == "paper" && computerChoice == "scissors" ) {
        computerScore++;
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "scissors beats paper";
        
    } else if (humanChoice == "scissors" && computerChoice == "rock" ) {
        computerScore++;
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "rock beats scissors";
        
    } else if (humanChoice == "scissors" && computerChoice == "paper" ) {
        humanScore++;
        //return console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        return "scissors beats paper";
        
    } else if (humanChoice == "scissors" && computerChoice == "scissors" ) {
        return "both are scissors, it's a tie";
        //console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);
        
    } else {
        return "didn't work";
    } 

}
// play game function
function playGame(){
    // calls playRound 5x
    /*
    for (let n = 0; n < 5; n++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(humanScore + " " + computerScore);

    }
    */
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

// calling functions n stuff
playGame();
