let playerScore = 0;
let computerScore = 0;
let reloadCount = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function reloadGame() {
    reloadCount++;
    const reloadBtn = document.createElement("button");
    reloadBtn.textContent = "Play Again";
    reloadBtn.style.backgroundColor = "rgb(222, 0, 0)";
    reloadBtn.addEventListener("click",function() {
        window.location.reload();
    });
    const options = document.querySelector(".options")
    options.appendChild(reloadBtn);
    return;
}


function playRound(humanChoice, computerChoice) {
    if(playerScore===5) {
        alert("You have won the game!");
        return;
    } else if(computerScore===5) {
        alert("You have lost the game!");
        return;
    }

    
    if (humanChoice === computerChoice) {

        console.log("Both played the same, no winner this round.");
        info.textContent = "Both played the same, no winner this round."

    } else if(humanChoice === 0 && computerChoice === 1) {
        computerScore++;
        csValue.textContent = computerScore;
        info.textContent = "You lose! Paper beats Rock.";

    } else if(humanChoice === 0 && computerChoice === 2) {
        playerScore++;
        psValue.textContent = playerScore;
        info.textContent = "You won! Rock beats scissors.";

    } else if(humanChoice ===1 && computerChoice ===0) {
        playerScore++;
        psValue.textContent = playerScore;
        info.textContent = "You won! Paper beats rock.";

    } else if(humanChoice === 1 && computerChoice === 2) {
        computerScore++;
        csValue.textContent = computerScore;
        info.textContent = "You lose! Scissors beats paper.";

    } else if(humanChoice === 2 && computerChoice === 0) {
        computerScore++;
        csValue.textContent = computerScore;
        info.textContent = "You lose! Rock beats scissors.";

    } else if(humanChoice === 2 && computerChoice === 1) {
        playerScore++;
        psValue.textContent = playerScore;
        info.textContent = "You won! Scissors beats paper.";

    }
    if(playerScore===5) {
        alert("You have won the game!");
        reloadGame();
    } else if(computerScore===5) {
        alert("You have lost the game!");
        reloadGame();
    }
    return;
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound(0,getComputerChoice()));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound(1,getComputerChoice()));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound(2,getComputerChoice()));

const psValue = document.querySelector(".player-score");

const csValue = document.querySelector(".computer-score");

const info = document.querySelector(".info");
