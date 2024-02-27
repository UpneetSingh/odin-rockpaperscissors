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

//initializing selection variables and a win,tie counter starting at 0
let computerSelection;
let playerSelection;
let winCount = 0;
let tieCount = 0;
let loseCount = 0;

//playRound
function playRound(playerSelection,computerSelection)
{
    //Computer plays its turn
    computerSelection = getComputerChoice();

    //RoundStarts

    if(playerSelection === computerSelection)
        {
            tieCount += 1;
            return result = "It's a Tie";
        }

    else if(playerSelection === "rock" && computerSelection === "scissor")
        {
            winCount += 1;
            return result = `You Win! Rock beats scissor`;
        }

    else if(playerSelection === "rock" && computerSelection === "paper")
        {
            loseCount +=1;
            return result = "You Lose! Paper beats Rock";
        }

    else if(playerSelection === "scissor" && computerSelection === "rock")
        {
            loseCount +=1;
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
            loseCount +=1;
            return result = "You Lose! Scissor beats Paper";
        }
   
}

//Game Starts
function playGame()
{
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector('#paper');
    const scissorBtn = document.querySelector('#scissor');

    rockBtn.addEventListener("click", ()=>{
        const resultDiv = document.querySelector('#result');
        const para = document.querySelector('#txtResult');
        resultDiv.appendChild(para);
        para.textContent =` ${playRound(playerSelection="rock",computerSelection)}. Your Score : ${winCount}. Computer's Score : ${loseCount}`;
        if(winCount === 5)
        {
            const declareDiv = document.querySelector('#final');
            declareDiv.style.backgroundColor = "yellow";
            declareDiv.style.border = "5px solid black";
            const declare = document.querySelector('p');
            declareDiv.appendChild(declare);
            declare.textContent = "Result: You Won the Game !! Refresh Browser to play Again!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
        }

        else if (loseCount === 5)
        {
            const declareDiv = document.querySelector('#final');
            declareDiv.style.backgroundColor = "red";
            declareDiv.style.border = "5px solid black";
            const declare = document.querySelector('p');
            declareDiv.appendChild(declare);
            declare.textContent = "Result: You Lost the Game : ( Refresh Browser to play Again!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;

        }

    });

    paperBtn.addEventListener("click",()=>{
        const resultDiv = document.querySelector('#result');
        const para = document.querySelector('#txtResult');
        resultDiv.appendChild(para);
        para.textContent =` ${playRound(playerSelection="paper",computerSelection)}. Your Score : ${winCount}. Computer's Score : ${loseCount}`;
        if(winCount === 5)
        {
            const declareDiv = document.querySelector('#final');
            declareDiv.style.backgroundColor = "yellow";
            declareDiv.style.border = "5px solid black";
            const declare = document.querySelector('p');
            declareDiv.appendChild(declare);
            declare.textContent = "Result: You Won the Game !! Refresh Browser to play Again!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
        }

        else if (loseCount === 5)
        {
            const declareDiv = document.querySelector('#final');
            declareDiv.style.backgroundColor = "red";
            declareDiv.style.border = "5px solid black";
            const declare = document.querySelector('p');
            declareDiv.appendChild(declare);
            declare.textContent = "Result: You Lost the Game : ( Refresh Browser to play Again!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
        }

    });

    scissorBtn.addEventListener("click",()=>{
        const resultDiv = document.querySelector('#result');
        const para = document.querySelector('#txtResult');
        resultDiv.appendChild(para);
        para.textContent =` ${playRound(playerSelection="scissor",computerSelection)}. Your Score : ${winCount}. Computer's Score : ${loseCount}`;
        if(winCount === 5)
        {
            const declareDiv = document.querySelector('#final');
            declareDiv.style.backgroundColor = "yellow";
            declareDiv.style.border = "5px solid black";
            const declare = document.querySelector('p');
            declareDiv.appendChild(declare);
            declare.textContent = "Result: You Won the Game !! Refresh Browser to play Again!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
        }

        else if (loseCount === 5)
        {
            const declareDiv = document.querySelector('#final');
            declareDiv.style.backgroundColor = "red";
            declareDiv.style.border = "5px solid black";
            const declare = document.querySelector('p');
            declareDiv.appendChild(declare);
            declare.textContent = "Result: You Lost the Game : ( Refresh Browser to play Again!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
        }

    });


}

playGame();





