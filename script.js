function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let input = prompt("Enter rock, paper or scissors: ");
    switch (input) {
        case "rock":
        case "ROCK":
        case "Rock":
            return 0;

        case "paper":
        case "PAPER":
        case "Paper":
            return 1;

        case "scissors":
        case "SCISSORS":
        case "Scissors":
            return 2;

        default:
            console.log("Not a valid option.");
            break;
    }
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

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(let i=0; i<5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) {
        console.log("You won!");
        console.log(`Final scores: \nYou - ${humanScore} \nComputer - ${computerScore}`);
    } else if(computerScore > humanScore) {
        console.log("You lost!");
        console.log(`Final scores: \nYou - ${humanScore} \nComputer - ${computerScore}`);
    } else {
        console.log("It's a tie!");
        console.log(`Final scores: \nYou - ${humanScore} \nComputer - ${computerScore}`);
    }
}
let humanScore;
let computerScore;
playGame();