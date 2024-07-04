function game(rounds){
    var counter = 1; // Used to loop for rounds 
    var Pscore = 0; // Initialized scores
    var Cscore = 0;
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const playerScore = document.querySelector("#scoreP")
    const computerScore = document.querySelector("#scoreC")
    const playerChoice = document.querySelector("#choiceP")
    const computerChoice = document.querySelector("#choiceC")
    // var userinput = prompt("Rock, Paper, Scissors : Select one: ")
    
    
    function getComputerChoice() { // Get computer's input
        var number = Math.random();
        var computer;
        if (number < 0.33) {
            computer = "ROCK";
        }
        else if (number > 0.33 && number < 0.66) {
            computer = "PAPER";
        }
        else {
            computer = "SCISSORS";
        }
        
        return computer;
    }

    rock.addEventListener("click", function(){
        round("ROCK")
    })

    paper.addEventListener("click", function(){
        round("PAPER")
    })

    scissors.addEventListener("click", function(){
        round("SCISSORS")
    })
    
    function round(playerin) {
        var result = getComputerChoice();

        if (playerin === "ROCK") {
            if (result === "ROCK") {
                console.log("Tie")
            }
            else if (result === "PAPER") {
                Cscore++;
            }
            else if (result == "SCISSORS") {
                Pscore++;
            }
        }
        
        else if (playerin === "PAPER") {
            if (result === "ROCK") {
                Pscore++;
            }
            else if (result === "PAPER") {
                console.log("Tie")
            }
            else if (result === "SCISSORS") {
                Cscore++;
            }
        }

        else if (playerin === "SCISSORS") {
            if (result === "ROCK") {
                Cscore++;
            }
            else if (result === "PAPER") {
                Pscore++;
            }
            else if (result === "SCISSORS") {
                console.log("Tie")
            }
        }

        playerChoice.innerHTML = "PLAYER CHOSE: " + playerin
        console.log("PLAYER CHOSE: ", playerin)

        computerChoice.textContent = "COMPUTER CHOSE: " + result 
        console.log("COMPUTER CHOSE: ", result);

        playerScore.textContent = Pscore
        console.log("Player score is: ", Pscore)

        computerScore.textContent = Cscore
        console.log("Computer score is: ", Cscore)
    }

    // round();
    // counter++;

    // if(Pscore > Cscore){
    //     console.log("Player wins!")
    // }
    // else{
    //     console.log("Computer wins!")
    // }

}    
game()



