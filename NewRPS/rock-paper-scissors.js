let computerOptions = [
    "rock",
    "paper",
    "scissors"
];
let computerScore = 0;
let userScore = 0;
let totalRounds = 0;
let playerSelection;
let computerSelection;
let computerCount = document.getElementById("computer-score");
let userCount = document.getElementById("user-score");
let roundRount = document.getElementById("total-rounds");
let userHand= document.getElementById("user-hand");
let computerHand = document.getElementById("computer-hand");
let result = document.getElementById("result");
let optionBtn = document.querySelectorAll("button.game-buttons")

document.getElementById("rock").addEventListener("click", rockButton);
document.getElementById("paper").addEventListener("click", paperButton);
document.getElementById("scissors").addEventListener("click", scissorButton);
document.getElementById("reset").addEventListener("click", resetButton);


function rockButton() {
    playerSelection = "rock";
    playRound();
    return;
    };

function paperButton(){
    playerSelection = "paper";
    playRound();
    return;
    }; 

function scissorButton(){
    playerSelection = "scissors";
    playRound();
    return;
    }; 
function resetButton (){
    location.reload();
}


function playRound(){
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if(playerSelection == computerSelection){
        totalRounds++;
        inputUpdate()
        scoreUpdate();
        result.textContent = "It'a draw!";
        return;
    }else if(playerSelection == "paper" && computerSelection == "rock" ){
        userScore++;
        totalRounds++;
        inputUpdate()
        scoreUpdate();
        result.textContent = "Result: You win! Paper beats rock";
        return;
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        totalRounds++;
        inputUpdate()
        scoreUpdate();
        result.textContent = "Result: You Lose! Scissors beats Paper";
        return;
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        userScore++;
        totalRounds++
        inputUpdate();
        scoreUpdate();
        result.textContent = "Result: You Win! Rock beats Scissors";
        return;
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        totalRounds++
        inputUpdate();
        scoreUpdate();
        result.textContent = "Result: You Lose! Paper beats Rock"
        return;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        userScore++;
        totalRounds++;
        inputUpdate();
        scoreUpdate();
        result.textContent = "Result: You Win! Scissors beats Paper";
        return;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        totalRounds++;
        inputUpdate();
        scoreUpdate();
        result.textContent = "Result: You Lose! Rock beats Scissors";
    } else{
       alert ("Input not recognised, please enter Rock, Paper, or Scissors")
       return
    }
}

function scoreUpdate(){
        computerCount.textContent = `Computer's Score: ${computerScore}`;
        userCount.textContent = `Your Score: ${userScore}`;
        roundRount.textContent = `Total Rounds Played: ${totalRounds}`;
        scoreCheck();
    }

function inputUpdate(){
        let upperUserHand = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let upperComputerScore = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        userHand.textContent = `Your Choice: ${upperUserHand}`;
        computerHand.textContent = `Computer's Choice: ${upperComputerScore}`;
    }

function scoreCheck(){
        if(userScore === 3){
            alert("You have won!")
            disableButton();
        }else if(computerScore == 3){
            alert("The computer has won!");
            disableButton();
    }}
    
function disableButton() {
    document.getElementById("rock").removeEventListener("click", rockButton)
    document.getElementById("paper").removeEventListener("click", paperButton)
    document.getElementById("scissors").removeEventListener("click", scissorButton)
    }






