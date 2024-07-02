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

function getHumanChoice(e) {
    let humanChoice = e.target.innerText;
    playRound(humanChoice, getComputerChoice());
}

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("click", getHumanChoice);
});

let computerScore=0;
let humanScore=0;

function playRound(humanChoice, computerChoice) {
    let roundResultTxt = "";
    if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        roundResultTxt = "Computer's "+computerChoice + " beats Human's "+ humanChoice + ". Computer wins!";
    }
    else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        roundResultTxt = "Human's " + humanChoice+ " beats Computer's " + computerChoice + ". Human wins!";
    }else{
        roundResultTxt = "Tie! "+humanChoice+" vs "+computerChoice;
    }

    let roundResult = document.querySelector(".roundResult");
    roundResult.innerText = roundResultTxt;
    
    let score = document.querySelector(".score");
    score.innerText = "Score (Computer:Human): "+computerScore.toString()+":"+humanScore.toString();
    //console.log("Score (Computer:Human): "+computerScore.toString()+":"+humanScore.toString());
}

