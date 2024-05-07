console.log("Hello Friend");

// global scope variables
let humanScore = 0;
let computerScore = 0;

// spits out r,p, or s
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
    

}
// taking human input
function getHumanChoice(){
    let x = prompt("Please enter Rock, Paper, or Scissors", ).toLowerCase();

    return x;
}

function playGame(){
    // logic for a round
function playRound(humanChoice, computerChoice){
    let currentRound = 1;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
  
  
      
    let roundWinner;
    if (humanSelection == computerSelection){
      console.log("it's a tie");
    } else{
      console.log("it's not working")
    }
      currentRound++;
      return console.log("current round: " + currentRound);
  
  }
  //const humanSelection = getHumanChoice();
  //const computerSelection = getComputerChoice();
  
  //console.log(getComputerChoice());
  // console.log(getHumanChoice());
  //console.log(round);
  // console.log(humanSelection);
  //playRound(humanSelection, computerSelection);

  // calls playRound 5x


}

