let computerOptions = [
    "rock",
    "paper",
    "scissors"
];
let computerScore = 0;
let userScore = 0;
let totalRounds = 0;
let playerSelection;

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
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if(playerSelection == computerSelection){
        alert ("It's a draw!");
        return
    }else if(playerSelection == "paper" && computerSelection == "rock" ){
        userScore++;
        totalRounds++;
        alert (" You win! Paper beats rock.\n Computer Score: " + computerScore + "\n Your Score: " + userScore);
        return
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        totalRounds++;
        alert (" You Lose! Scissors beats Paper.\n Computer Score: " + computerScore + "\n Your Score :" + userScore);
        return
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        userScore++;
        totalRounds++
        alert (" You Win! Rock beats Scissors.\n Computer Score: " + computerScore + "\n Your Score: " + userScore);
        return
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        totalRounds++
        alert (" You Lose! Paper beats rock.\n Computer Score: " + computerScore + "\n Your Score: " + userScore)
        return
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        userScore++;
        totalRounds++
        alert (" You Win! Scissors beats Paper.\n Computer Score: " + computerScore + "\n Your Score: " + userScore)
        return
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        totalRounds++;
        alert (" You Lose! Rock beats Scissors.\n Computer Score: " + computerScore + "\n Your Score: " + userScore)
        return
    } else{
       alert ("Input not recognised, please enter Rock, Paper, or Scissors")
       return
    }
}
    function game(){
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
        
    }

    //game(); //Plays game from the beginning


    function uiPlayGame() {
        
    }


    //test();