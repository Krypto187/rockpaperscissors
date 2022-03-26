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
        console.log(`Draw! ${playerSelection} is the same as ${computerSelection}`);

    } else if (pSelect == "rock" && cSelect == "paper") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "rock" && cSelect == "scissor") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);

    } else if (pSelect == "paper" && cSelect == "rock") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);

    } else if (pSelect == "paper" && cSelect == "scissor") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "scissor" && cSelect == "rock") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);

    } else if (pSelect == "scissor" && cSelect == "paper") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);

    }
}

playRound("RoCK", computerPlay());