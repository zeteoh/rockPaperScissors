const choice = document.querySelectorAll('.choice');
const getPlayerScore = document.querySelector('.player-score');
const getBotScore = document.querySelector('.bot-score');
const getRound = document.querySelector('.rounds')
const getPlayerChoice = document.querySelector('.player-choice');
const getBotChoice = document.querySelector('.bot-choice');
const getResult = document.querySelector('.result');

let playerScore = 0;
let botScore = 0;
let round = 1;
let playerChoiceSelected = ""
let computerChoiceSelected = ""
let computerChoices = ["rock", "paper", "scissors"];
let choiceMap = {
    "rock": "✊",
    "paper": "✋",
    "scissors": "✌"
};

choice.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoiceSelected = choiceMap[button.classList[0]];
        const botChoice = getComputerChoice();
        computerChoiceSelected = choiceMap[botChoice]
        const result = singleRound(button.classList[0], botChoice);
        // Display emoji for player and bot choice
        getPlayerChoice.textContent = choiceMap[button.classList[0]];
        getBotChoice.textContent = choiceMap[botChoice];
        if(playerScore == 5 || botScore == 5){
            round += 1;
            playerScore = 0;
            botScore = 0;
        }
        getPlayerScore.innerHTML = playerScore;
        getBotScore.innerHTML = botScore;
        getRound.textContent = `Round ${round}`;
        getResult.textContent = result;
    })
})

function getComputerChoice(){
    const index = Math.floor(Math.random() * 3);
    return computerChoices[index];
}

function singleRound(playerSelection, computerSelection){
    let outputStr = ""
    console.log(playerSelection)
    if(
        (playerSelection.includes("rock") && computerSelection.includes("scissors"))    ||
        (playerSelection.includes("paper") && computerSelection.includes("rock"))       ||
        (playerSelection.includes("scissors") && computerSelection.includes("paper"))
    ){
        outputStr = `You Win! ${playerChoiceSelected} beats ${computerChoiceSelected}`;
        playerScore += 1
    }
    else if(
        (playerSelection.includes("rock") && computerSelection.includes("paper"))       ||
        (playerSelection.includes("paper") && computerSelection.includes("scissors"))   ||
        (playerSelection.includes("scissors") && computerSelection.includes("rock"))

    ){
        outputStr = `You Lose! ${computerChoiceSelected} beats ${playerChoiceSelected}`;
        botScore += 1
    }
    else{
        outputStr = `It's a draw!`
    }
    
    return outputStr
}