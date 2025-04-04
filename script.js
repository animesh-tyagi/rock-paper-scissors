let playerScore;
let computerScore;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {

        console.log("Both played the same, no winner this round.");
        return;
    } else if(humanChoice === 0 && computerChoice === 1) {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
        return;
    } else if(humanChoice === 0 && computerChoice === 2) {
        humanScore++;
        console.log("You won! Rock beats scissors.");
        return;
    } else if(humanChoice ===1 && computerChoice ===0) {
        humanScore++;
        console.log("You won! Paper beats rock.");
        return;
    } else if(humanChoice === 1 && computerChoice === 2) {
        computerScore++;
        console.log("You lose! Scissors beats paper.");
        return;
    } else if(humanChoice === 2 && computerChoice === 0) {
        computerScore++;
        console.log("You lose! Rock beats scissors.");
        return;
    } else if(humanChoice === 2 && computerChoice === 1) {
        humanScore++;
        console.log("You won! Scissors beats paper.");
        return;
    }
}

const rock = document.querySelector("rock");
rock.addEventListener("click", playRound(0,() => getComputerChoice()));

const paper = document.querySelector("paper");
paper.addEventListener("click", playRound(1,() => getComputerChoice()));

const scissors = document.querySelector("scissors");
scissors.addEventListener("click", playRound(2,() => getComputerChoice()));

