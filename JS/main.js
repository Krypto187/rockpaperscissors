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

function playRound(playerSelection, computerSelection) {
    let pSelect = "" + playerSelection;
    pSelect = pSelect.toLowerCase();
    let cSelect = "" + computerSelection;
    cSelect = cSelect.toLowerCase();
    if (pSelect == cSelect) {
        return (`Draw! ${playerSelection} is the same as ${computerSelection}`);

    } else if (pSelect == "rock" && cSelect == "paper") {
        return (`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "rock" && cSelect == "scissor") {
        return (`You won! ${playerSelection} beats ${computerSelection}`);

    } else if (pSelect == "paper" && cSelect == "rock") {
        return (`You won! ${playerSelection} beats ${computerSelection}`);

    } else if (pSelect == "paper" && cSelect == "scissor") {
        return (`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "scissor" && cSelect == "rock") {
        return (`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "scissor" && cSelect == "paper") {
        return (`You won! ${playerSelection} beats ${computerSelection}`);

    }
}

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

btnPaper.addEventListener("click", function() {
    alert(playRound(btnPaper.textContent, computerPlay()));
})

btnRock.addEventListener("click", function() {
    alert(playRound(btnRock.textContent, computerPlay()))

})

btnScissor.addEventListener("click", function() {
    alert(playRound(btnScissor.textContent, computerPlay()))
})

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