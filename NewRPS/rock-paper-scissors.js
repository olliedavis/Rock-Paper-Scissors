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


const rockSelected = document.getElementById("rock");
    rockSelected.addEventListener("click", () => {
        playerSelection = "rock";
        playRound();
        return;
    });

const paperSelected = document.getElementById("paper");
    paperSelected.addEventListener("click", () => {
        playerSelection = "paper";
        playRound();
        return;
    });

const scissorsSelected = document.getElementById("scissors");
    scissorsSelected.addEventListener("click", () => {
        playerSelection = "scissors";
        playRound();
        return;
    });



function playRound(){
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if(playerSelection == computerSelection){
        totalRounds++;
        scoreUpdate();
        inputUpdate()
        result.textContent = "It'a draw!";
        return;
    }else if(playerSelection == "paper" && computerSelection == "rock" ){
        userScore++;
        totalRounds++;
        scoreUpdate();
        inputUpdate()
        result.textContent = "Result: You win! Paper beats rock";
        return;
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        totalRounds++;
        scoreUpdate();
        inputUpdate()
        result.textContent = "Result: You Lose! Scissors beats Paper";
        return;
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        userScore++;
        totalRounds++
        scoreUpdate();
        inputUpdate();
        result.textContent = "Result: You Win! Rock beats Scissors";
        return;
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        totalRounds++
        scoreUpdate();
        inputUpdate();
        result.textContent = "Result: You Lose! Paper beats Rock"
        return;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        userScore++;
        totalRounds++;
        scoreUpdate();
        inputUpdate();
        result.textContent = "Result: You Win! Scissors beats Paper";
        return;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        totalRounds++;
        scoreUpdate();
        inputUpdate();
        result.textContent = "Result: You Lose! Rock beats Scissors";
    } else{
       alert ("Input not recognised, please enter Rock, Paper, or Scissors")
       return
    }
}
    //Previous  gameplay
    /*function game(){
        do{             
            playRound();
        }
        while(userScore != 3 && computerScore != 3 );
        if(userScore == 3){
            alert("You have won!");
        } else if (computerScore == 3){
            alert("The computer has won");
        } else {
            alert("Uh oh, something has gone wrong");
        }
        
    }*/
    
    function scoreUpdate(){
        computerCount.textContent = `Computer's Score: ${computerScore}`;
        userCount.textContent = `Your Score: ${userScore}`;
        roundRount.textContent = `Total Rounds Played: ${totalRounds}`;
    }

    function inputUpdate(){
        let upperUserHand = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let upperComputerScore = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        userHand.textContent = `Your Choice: ${upperUserHand}`;
        computerHand.textContent = `Computer's Choice: ${upperComputerScore}`;
    }