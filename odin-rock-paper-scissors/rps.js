console.log("Hello Friend");

// global scope variables
let humanScore = 0;
let computerScore = 0;

// spits out r,p, or s
function getComputerChoice(){
    let r = "Rock"
    let p = "Papper"
    let s = "Scissors"
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
    let x = prompt("Please enter Rock, Paper, or Scissors", "Rock").toLowerCase();

    return x;
}

// logic for a round
function playRound(humanChoice, computerChoice){
  

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//console.log(getComputerChoice());
console.log(getHumanChoice());
// console.log(humanSelection);
//playRound(humanSelection, computerSelection);
