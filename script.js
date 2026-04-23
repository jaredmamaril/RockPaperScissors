console.log("Hello, World!");

testComputerChoice();

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
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("Tie!. No points awarded.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
}