function computerPlay() {
    let x = Math.floor(Math.random() * (2 + 1));
    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else if (x == 2) {
        return "scissor";
    }
}

console.log(computerPlay());