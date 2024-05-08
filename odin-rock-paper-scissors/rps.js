// Declaration
let humanScore = 0;
let computerScore = 0;

let roundWinner;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
// let winConVar = winCondition();

// Computers Choice = spits out r,p, or s
function getComputerChoice(){
    let r = "rock"
    let p = "papper"
    let s = "scissors"
    let a = 1;

    //Math.random()
    let x = Math.floor((Math.random() * 3) + 1);

    if (x == 1){
        console.log(r);
    } else if (x == 2){
        console.log(p);
    } else if (x == 3){
        console.log(s);
    } else{
        // return x;

    }
    return x;

}


// Human Choice = taking human input
function getHumanChoice(){
    let x = prompt("Please enter Rock, Paper, or Scissors", ).toLowerCase();
    return x;
}
 // logic for a round
 function playRound(humanSelection, computerSelection){
    if (humanSelection == "rock" && computerSelection == "rock" ) {
        return console.log("both are rock, it's a tie");
        // increase current round
        n++;
        
    } else if (humanSelection == "rock" && computerSelection == "paper" ) {
        return console.log("paper beats rock");
        // increase current round
        n++;
        // increase comp score by one
        computerScore++;
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
    } else if (humanSelection == "rock" && computerSelection == "scissors" ) {
        return console.log("rock beats scissors");
        // increase current round
        // increase player score by one
        n++;
        humanScore++;
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);


        
    } else if (humanSelection == "paper" && computerSelection == "rock" ) {
        return console.log("paper beats rock");
        // increase current round
        // increase player score by one
        n++;
        humanScore++;
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
    } else if (humanSelection == "paper" && computerSelection == "paper" ) {
        return console.log("both are paper, it's a ti=");
        // increase current round
        n++;
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
    } else if (humanSelection == "paper" && computerSelection == "scissors" ) {
        return console.log("scissors beats paper");
        // increase current round
        // increase comp score by one
        n++;
        computerScore++;
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
    } else if (humanSelection == "scissors" && computerSelection == "rock" ) {
        return console.log("rock beats scissors");
        // increase current round
        // increase comp score by one
        n++;
        computerScore++;
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
    } else if (humanSelection == "scissors" && computerSelection == "paper" ) {
        return console.log("scissors beats paper");
        // increase current round
        // increase player score by one
        n++;
        humanScore++;
        return console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
    } else if (humanSelection == "scissors" && computerSelection == "scissors" ) {
        return console.log("both are scissors, it's a tie");
        console.log("the current score is: " +  "human: " + humanScore + "Computer: " + computerScore);

        
        
    } else {
        return console.log("didn't work");
    } 

}
// play game function
function playGame(){
    // calls playRound 5x
    for (let n = 0; n < 5; n++) {
        const humanSelect = getComputerChoice();
        const compSelect = getComputerChoice();
        console.log("current round: " + n);
        console.log(playRound(humanSelect, compSelect));
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
 
    // logs what you chose
    switch (humanSelection) {
        case "rock":
            console.log("you chose rock")
            break;
        case "paper":
            console.log("you chose paper")
            break;
        case "scissors":
            console.log("you chose scissors")
            break;
    
        default:
            break;
    }

}

// calling functions n stuff
playGame();
