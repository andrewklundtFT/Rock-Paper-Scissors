'use strict'

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

