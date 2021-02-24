function computerPlay(){
    const rpsChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return rpsChoice[randomNumber];
}

let playerWins=0;
let computerWins=0;

function playRound(playerSelection, computerPlay){
    if (playerSelection === "rock" && computerPlay === "scissors"){
        playerWins++
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerPlay === "rock"){
        playerWins++
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerPlay === "paper"){
        playerWins++
        return "You Win! Scissors beats Paper!";
    } else if (computerPlay === "scissors" && playerSelection === "paper"){
        computerWins++
        return "You Lose! Scissors beats Paper!";
    } else if (computerPlay === "paper" && playerSelection === "rock"){
        computerWins++
        return "You Lose! Paper beats Rock!";
    } else if (computerPlay === "rock" && playerSelection === "scissors"){
        computerWins++
        return "You Lose! Rock beats Scissors";
    } else {
        return "Its a Draw!";
    }
}
let winnerofRound;

function game(){
    let playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    let computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));
        
    playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));
        
    playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));
        
    playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));

    finalScore();
}

game();

function finalScore(){
    if (playerWins > computerWins){
        console.log("You have won!")
    } else if (playerWins<computerWins){
        console.log("Computer Wins!")
    } else if (playerWins === computerWins){
        console.log("Its a tie")
    } else {
    }
}


