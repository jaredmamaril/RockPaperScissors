function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function testComputerChoice() {
    const choice = getComputerChoice();
    console.log("Computer choice: " + choice);

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log("Test passed: Valid choice");
    } else {
        console.log("Test failed: Invalid choice");
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const beats = { rock: "scissors",
                    paper: "rock",
                    scissors: "paper" };

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (beats[humanChoice] === computerChoice) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        playRound();
        console.log("Current score - You: " + humanScore + " Computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Sorry, you lost the game. Better luck next time!");
    }
}

playGame();