function computerPlay() {
    let x = Math.floor(Math.random() * (2 + 1));
    if (x == 0) {
        return "Rock";
    } else if (x == 1) {
        return "Paper";
    } else if (x == 2) {
        return "Scissor";
    }
}
let pScore = 0;
let cScore = 0;

function playRound(playerSelection, computerSelection) {
    let pSelect = "" + playerSelection;
    pSelect = pSelect.toLowerCase();
    let cSelect = "" + computerSelection;
    cSelect = cSelect.toLowerCase();
    if (pSelect == cSelect) {
        return (`Draw! ${playerSelection} is the same as ${computerSelection}`);

    } else if (pSelect == "rock" && cSelect == "paper") {
        cScore += 1;
        return (`You lost! ${computerSelection} beats ${playerSelection}`);


    } else if (pSelect == "rock" && cSelect == "scissor") {
        pScore += 1;
        return (`You won! ${playerSelection} beats ${computerSelection}`);

    } else if (pSelect == "paper" && cSelect == "rock") {
        pScore += 1;
        return (`You won! ${playerSelection} beats ${computerSelection}`);

    } else if (pSelect == "paper" && cSelect == "scissor") {
        cScore += 1;
        return (`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "scissor" && cSelect == "rock") {
        cScore += 1;
        return (`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "scissor" && cSelect == "paper") {
        pScore += 1;
        return (`You won! ${playerSelection} beats ${computerSelection}`);

    }
}
/* Select elements */
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");
const divResult = document.querySelector(".results");
const result = document.createElement("p");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");


/* Add functionality */

playerScore.textContent = "0";
computerScore.textContent = "0";
btnPaper.addEventListener("click", function() {
    result.textContent = playRound(btnPaper.textContent, computerPlay());
    if (pScore == 5) {
        alert("You won!")
        pScore = 0;
        cScore
        return;
    } else if (cScore == 5) {
        alert("You lost! GG noob")
        pScore = 0;
        cScore = 0;
        return;
    }
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

})

btnRock.addEventListener("click", function() {
    result.textContent = playRound(btnRock.textContent, computerPlay());
    if (pScore > 4) {
        alert("You won!")
        pScore = 0;
        cScore = 0;
        return;
    } else if (cScore > 4) {
        alert("You lost! GG noob")
        pScore = 0;
        cScore = 0;
        return;
    }
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

})

btnScissor.addEventListener("click", function() {
    result.textContent = playRound(btnScissor.textContent, computerPlay());
    if (pScore == 5) {
        alert("You won!")
        pScore = 0;
        cScore = 0;
        return;
    } else if (cScore == 5) {
        alert("You lost! GG noob")
        pScore = 0;
        cScore = 0;
        return;
    }
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

})

/* Add HMTL Elements */
divResult.appendChild(playerScore)
divResult.appendChild(result);
divResult.appendChild(computerScore)

// function game(rounds) {
//     let lose = 0;
//     let win = 0;
//     for (let i = 1; i < rounds; i++) {
//         let player = prompt("Rock, Paper or Scissor?");
//         let score = "" + playRound(player, computerPlay());
//         if (score.includes("lost")) {
//             lose++;
//         } else if (score.includes("won")) {
//             win++;
//         }
//         console.log(score);
//     }
//     if (lose < win) {
//         console.log("You won! GZ!");
//     } else {
//         console.log("You lost, noob");
//     }
// }

// game(5);