let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Corrected typo here
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; // Corrected variable name here
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerHTML="Game was draw";
}
const showWinner = (userWin,userChoice,compChoice) => { // Added parameter userWin here
    if (userWin) {
      userScore++;
      userScorePara.innerHTML=userScore;
        console.log("You win!");
        msg.innerHTML=`you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
      compScore++;
      compScorePara.innerHTML=compScore;
        console.log("You lose");
        msg.innerHTML=`you lose  ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin; // Define userWin here
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice); // Pass userWin as an argument here
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});


