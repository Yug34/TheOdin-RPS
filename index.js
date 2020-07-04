//initialize every variable
let playerWins = 0;
let computerWins = 0;
let matchCount = 0;
let ties = 0;
let playerChoice = undefined;
let computerChoice = undefined;
let winnerString = undefined;

// pre-load every image
(new Image()).src = "images/rockred.png";
(new Image()).src = "images/papergreen.png";
(new Image()).src = "images/paperred.png";
(new Image()).src = "images/rockgreen.png";
(new Image()).src = "images/scissorsgreen.png";
(new Image()).src = "images/scissorsred.png";

const selections = ["rock","paper","scissors"];

//returns a randomized choice from the selections array and
//changes the corresponding RPS image to red
function computerPlay()
{
    //selects a random choice from the selections array
    let ans = selections[Math.floor(Math.random() * selections.length)];

    //changes RPS image to red
    if(ans === "rock")
    {
        document.getElementById("pcrock").src = "images/rockred.png";
    }
    else if(ans === "paper")
    {
        document.getElementById("pcpaper").src = "images/paperred.png";
    }
    else
    {
        document.getElementById("pcscissors").src = "images/scissorsred.png";
    }

    return ans;
}

document.getElementById("rock").addEventListener("click", function ()
{
    playerChoice = "rock";
    matchCount++;

    document.getElementById("rock").src = "images/rockgreen.png";

    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
});

document.getElementById("paper").addEventListener("click", function ()
{
    playerChoice = "paper";
    matchCount++;

    document.getElementById("paper").src = "images/papergreen.png";

    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
});

document.getElementById("scissors").addEventListener("click", function ()
{
    playerChoice = "scissors";
    matchCount++;

    document.getElementById("scissors").src = "images/scissorsgreen.png";

    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
});

function playRound(move, pcMove) {
    if (move === "rock" && pcMove === "scissors" || move === "paper" && pcMove === "rock" || move === "scissors" && pcMove === "paper") {
        playerWins++;
        winnerString = "You"
    }
    else if (move === "scissors" && pcMove === "rock" || move === "rock" && pcMove === "paper" || move === "paper" && pcMove === "scissors") {
        computerWins++;
        winnerString = "Computer";
    }
    else {
        winnerString = "Tie";
        ties++;
    }
    console.log(playerWins + " " + computerWins + " " + matchCount);

    //updates scoreboard
    document.getElementById("your_output").innerHTML = "Your Score: " + playerWins;
    document.getElementById("computer_output").innerHTML = "Computer's Score: " + computerWins;
    document.getElementById("ties").innerHTML = "Ties:  " + ties;

    printRoundResult();
}

//prints the result of the round at the bottom of the page
function printRoundResult() {
    const msg = document.querySelector(".history");
    const line = document.createElement('p');

    if(winnerString === "Tie")
    {
        line.textContent = "Round " + matchCount + ": " + winnerString;
    }
    else if(winnerString === "You")
    {
        line.style.color = "#4caf50";
        line.textContent = "Round " + matchCount + ": " + winnerString + " won the round";
    }
    else
    {
        line.style.color = "#f44336";
        line.textContent = "Round " + matchCount + ": " + winnerString + " won the round";
    }
    msg.appendChild(line);
    msg.insertBefore(line, msg.firstChild);
}

function replaceImage() {
    //change any green image to default(black) image
    document.getElementById("rock").src = "images/rock.png";
    document.getElementById("paper").src = "images/paper.png";
    document.getElementById("scissors").src = "images/scissors.png";

    //change any red image to default(black) image
    document.getElementById("pcrock").src = "images/rock.png";
    document.getElementById("pcpaper").src = "images/paper.png";
    document.getElementById("pcscissors").src = "images/scissors.png";
}
