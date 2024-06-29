function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3); //0-2 (corresponds to rock, paper, and scissors)

    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Error in getComputerChoice");
    }   
}

function getHumanChoice() {
    let humanChoice = ""

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors" ) {
        humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice;
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            console.log("Computer's "+computerChoice + " beats Human's "+ humanChoice + ". Computer wins!");
        }
        else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
            humanScore++;
            console.log("Human's " + humanChoice+ " beats Computer's " + computerChoice + ". Human wins!");
        }else{
            console.log("Tie! "+humanChoice+" vs "+computerChoice);
        }
        console.log("Score (Computer:Human): "+computerScore.toString()+":"+humanScore.toString());
    }

    //Number of Rounds to be played
    for(let i=0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(computerScore > humanScore) {
        console.log("Computer wins! "+computerScore+" to "+humanScore);
    }if(computerScore < humanScore) {
        console.log("Human wins! "+humanScore+" to "+computerScore);
    }else{
        console.log("Tie! "+humanScore+" to "+computerScore);
    }
}

playGame();