let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame = () => {
    console.log("Game was draw.")
    msg.innerText = "Game was draw.. Play Again."
    msg.style.backgroundColor = "hotpink";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congrats!!..You win! ur ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Ooops!!..You lose. ${compChoice} beats ur ${userChoice}`; 
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
         console.log("user choice = ", userChoice);
         //generate comp choice
         const compChoice = genCompChoice();
         console.log("comp choice = ", compChoice);

         if(userChoice === compChoice){
            drawGame();
         } else {
            let userWin = true; 
            if(userChoice === "rock") {
                //scissors, paper
                userWin = compChoice === "paper" ? false : true;
            } else if(userChoice === "paper") {
                //rock, scissor
                userWin = compChoice === "scissor" ? false : true;
            } else {
                //rock, paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
         }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});