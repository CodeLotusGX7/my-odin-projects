console.log("Hello Friend");

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

function getHumanChoice(){
    let x = prompt("Please enter Rock, Paper, or Scissors", "Rock");

    return x;
}
console.log(getComputerChoice());
console.log(getHumanChoice());
