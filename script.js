'use strict'

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.toLowerCase().substring(1);
    if (playerSelection === computerSelection) {
        return "Tie! You both played " + playerSelection + "!";
    }
    if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) { 
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    } else {
        return "You won! " + playerSelection + " beats " + computerSelection + "!"
    }
    return null;
}

//const playerSelection = "paper";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
//playerSelection = "pAPer";
//console.log(playRound(playerSelection, computerSelection));
//playerSelection = "PAPER";
//console.log(playRound(playerSelection, computerSelection));

function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 1; i < 6; i++) {
        let roundResult = playRound(prompt("Game " + i + ": Enter Rock, Paper, or Scissors"), getComputerChoice());
        if (roundResult.substring(0, 5) === "You w") {
            playerScore++;
        } else if (roundResult.substring(0, 5) === "You l") {
            computerScore++;
        }
        alert(roundResult);
    }
    alert("Computer " + computerScore + ", Human " + playerScore);
}

playGame();