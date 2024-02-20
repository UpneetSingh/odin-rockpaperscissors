//Player will play a game of Rock Paper Scissors against the computer
//Game consists of five rounds
//If player/computer turns are same, round ties
//If player/computer turns are different, winner is chosen


//this function returns computer's choice (random)
function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)
    {
       return "rock";
    }

    else if(randomNumber === 1)
    {
        return "paper";
    }

    else
    {
        return "scissor";
    }

}

//this function returns player's choice by prompting user
function getPlayerChoice()
{  
    let playerChoice = prompt("Welcome to Rock Paper Scissors! Choose one : Rock, Paper, Scissor");
    return playerChoice.toLowerCase();
}

//initializing selection variables and a win,tie counter starting at 0
let computerSelection;
let playerSelection;
let winCount = 0;
let tieCount = 0;

//playRound
function playRound(playerSelection,computerSelection)
{
    //Computer plays its turn
    computerSelection = getComputerChoice();

    //Player plays his/her turn
    playerSelection = getPlayerChoice();

    //RoundStarts

    if(playerSelection === computerSelection)
        {
            tieCount += 1;
            return result = "It's a Tie";
        }

    else if(playerSelection === "rock" && computerSelection === "scissor")
        {
            winCount += 1;
            return result = "You Win! Rock beats scissor";
        }

    else if(playerSelection === "rock" && computerSelection === "paper")
        {
            return result = "You Lose! Paper beats Rock";
        }

    else if(playerSelection === "scissor" && computerSelection === "rock")
        {
            return result = "You Lose! Rock beats Scissor";
        }

    else if(playerSelection === "scissor" && computerSelection === "paper")
        {
            winCount += 1;
            return result = "You Win! Scissor beats Paper";
        }

    else if(playerSelection === "paper" && computerSelection === "rock")
        {
            winCount += 1;
            return result = "You Win! Paper beats Rock";
        }

    else if(playerSelection === "paper" && computerSelection === "scissor")
        {
            return result = "You Lose! Scissor beats Paper";
        }
   
}

//Game Starts
function playGame()
{
        console.log(playRound(playerSelection,computerSelection));
        console.log(playRound(playerSelection,computerSelection));  
        console.log(playRound(playerSelection,computerSelection));
        console.log(playRound(playerSelection,computerSelection));
        console.log(playRound(playerSelection,computerSelection));
}

playGame();

//Result

if (winCount === 2 && tieCount === 1)
{
    console.log("Result: Game tied");
}

else if (winCount === 2 && tieCount === 2)
{
    console.log("Result: You are a winner");
}

else if (winCount === 1 && tieCount === 3)
{
    console.log("Result: Game tied");
}

else if (winCount === 2 && tieCount === 3)
{
    console.log("Result: You are a winner");
}

else if (winCount === 1 && tieCount === 4)
{
    console.log("Result: You are a winner");
}

else if(winCount < 3)
{
    console.log("Result: You are a loser")
}

else
{
    console.log("Result: You are a winner")
}


