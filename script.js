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

