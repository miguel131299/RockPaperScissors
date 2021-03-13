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

function game() {

    let userPoints = 0, computerPoints = 0;

    //play 5 rounds
    for (let i = 0; i < 5; i++) {
       
        let userMove = prompt("Rock, Paper or Scissors");

        let computerMove = computerPlay();

        let result = playRound(userMove, computerMove);

        if (result.startsWith("You Win")) {
                
            userPoints++;
        }
        else if (result.startsWith("You Lose")) {
            computerPoints++; 
        }

        console.log(result
                +`\nYou have ${userPoints} Points!\n`
                 +  `The Computer has ${computerPoints}!\n`);
    
    }
}
