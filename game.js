let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");
const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game Draw !,play again"
    msg.style.backgroundColor = "#d34425";
    msg.style.border = "5px solid black";
}

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `Congratulations ,You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.border = "5px solid black";
    }
    else {
        computerScore++;
        compScorepara.innerText = computerScore;
        msg.innerText = `oops! You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.border = "5px solid black";
    }
}

const playGame = (userChoice) => {
     //generating computers choice 
    const compChoice = genCompChoice();
 
    if (userChoice === compChoice) {
        //game draw
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "stone") {
            //scissors,paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // scissors, stone
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            //stone,paper
            userwin = compChoice === "stone" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked ..", userChoice);
        playGame(userChoice);
    });
});