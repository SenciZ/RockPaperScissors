let playerWins = 0;
let computerWins = 0;



const buttonClicked = document.querySelectorAll("button");
buttonClicked.forEach(buttonClicked  => {
    buttonClicked.addEventListener("click", (e) => {
        let playerSelection = e.target.className;
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection);
            if ((playerWins === 5) || (computerWins === 5)){
                finalScore();
            } 
    });
});

function computerPlay(){
    const rpsChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return rpsChoice[randomNumber];
}



function playRound(playerSelection, computerPlay){
    let gameWinner = document.querySelector(".gameWinner");
    if (playerSelection === "rock" && computerPlay === "scissors"){
        playerWins++
        gameWinner.textContent = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerPlay === "rock"){
        playerWins++
        gameWinner.textContent = "You Win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerPlay === "paper"){
        playerWins++
        gameWinner.textContent = "You Win! Scissors beats Paper!";
    } else if (computerPlay === "scissors" && playerSelection === "paper"){
        computerWins++
        gameWinner.textContent = "You Lose! Scissors beats Paper!";
    } else if (computerPlay === "paper" && playerSelection === "rock"){
        computerWins++
        gameWinner.textContent = "You Lose! Paper beats Rock!";
    } else if (computerPlay === "rock" && playerSelection === "scissors"){
        computerWins++
        gameWinner.textContent = "You Lose! Rock beats Scissors";
    } else {
        gameWinner.textContent = "Its a Draw!";
    }
}


function finalScore(){
    let gameCounter = document.querySelector(".gamecount");

    if (playerWins > computerWins){
        gameCounter.textContent = "You Win!";
        disableButtons();

    } else if (playerWins<computerWins){
        gameCounter.textContent = "Computer Wins!";
        disableButtons();

    } else if (playerWins === computerWins){
        gameCounter.textContent = "Its a Tie!";
        disableButtons();
    }  
}

function disableButtons() {
    buttonClicked.forEach(buttonClicked => {
        buttonClicked.disabled = true
    });
}


