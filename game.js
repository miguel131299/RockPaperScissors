function computerPlay() {
    let randomNum = Math.random()*3;
    randomNum = Math.floor(randomNum);

    switch(randomNum){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection,computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock") {
        
        if(computerSelection === "rock") {
            return("It's a tie!");
        }
        else if(computerSelection === "paper") {
            return("You Lose! Paper beats Rock");
        }
        else {
            return("You Win! Rock beats Scissors");
        }
    }

    else if (playerSelection === "paper") {
        
        if(computerSelection === "rock") {
            return("You Win! Paper beats Rock");
        }
        else if(computerSelection === "paper") {
            return("It's a tie!");
        }
        else {
            return("You Lose! Scissors beat paper");
        }
    }        
    else {
       
        if(computerSelection === "rock") {
            return("You Lose! Rock beats Scissors");
        }
        else if(computerSelection === "paper") {
            return("You Win! Scissors beat paper");
        }
        else {
            return("It's a tie");
        }
    }
}

function runRound(userMove) {
    let roundResult = playRound(userMove, computerPlay());
    
    updatePoints(roundResult);

    resultDiv.textContent = roundResult + `You have ${userPoints} points.\n`
        + `The Computer has ${computerPoints} points.`
}

function updatePoints(roundResult) {
    if (roundResult.startsWith('You Win')) {
        userPoints++;        
    }
    else if (roundResult.startsWith('You Lose')) {
        computerPoints++;
    }
    if (userPoints === 5 || computerPoints === 5) {
       gameEnd(); 
    }
}

function gameEnd() {
     let buttons = document.querySelectorAll('button');
     buttons.forEach(button => body.removeChild(button));
 
    //user won
    if (userPoints === 5) {
        resultDiv.textContent = 'Congratulations! You were able to outsmart'
            + ' a Computer';
   }
    
    //user lost
    else {
        resultDiv.textContent = "I'm sorry but you have lost the game.\n"
            + "Keep trying!";
    }
}

//select button and result div
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const resultDiv = document.getElementById('result');
const body = document.querySelector('body');

let userPoints = 0;
let computerPoints = 0;

//add event listeners to play round with corresponding values
rockButton.addEventListener('click', () => runRound('rock'));
paperButton.addEventListener('click', () => runRound('paper'));
scissorsButton.addEventListener('click', () => runRound('scissors'));


