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

function playGame() {
    for (let i = 0; i < 5; i++) {        
    alert(playRound(prompt("RPS?"), getComputerChoice()));
    }
}
