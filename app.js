let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock , paper , scissors
    const randIDx = Math.floor(Math.random() * 3);
    return options[randIDx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText ="Game was Draw. Play Again";
    msg.style.backgraoundColor = "#081b31";
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgraoundColor = "green";
    } else {
        console.log("You lose!");
        msg.innerText ="You Lose!";
        msg.style.backgraoundColor = "red";
    }


}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice;-> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;

        } else {
            //rock , paper
            compChoice === "rock" ? false : true;
        }

         showWinner(userWin);


    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});
