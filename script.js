function game(rounds){
    var counter = 1; // Used to loop for rounds 
    var Pscore = 0; // Initialized scores
    var Cscore = 0;
    while(counter <= rounds){

        var userinput = prompt("Rock, Paper, Scissors : Select one: ")
        var userin = userinput.toUpperCase();
        function getComputerChoice(){ // Get computer's input
            var number = Math.random();
            var computer;
            if(number < 0.33){
                computer = "ROCK";
            }
            else if(number > 0.33 && number < 0.66){
                computer = "PAPER";
            }
            else{
                computer = "SCISSORS";
            }
            
            return computer;
        }
        
        function round(){
            var result = getComputerChoice();
        
            if(userin === "ROCK"){
                if(result === "ROCK"){
                    console.log("Tie")
                }
                else if(result === "PAPER"){
                    Cscore++;
                }
                else if(result == "SCISSORS"){
                    Pscore++;
                }
            }
            
            else if(userin === "PAPER"){
                if(result === "ROCK"){
                    Pscore++;
                }
                else if(result === "PAPER"){
                    console.log("Tie")
                }
                else if(result === "SCISSORS"){
                    Cscore++;
                }
            }
            
            else if(userin === "SCISSORS"){
                if(result === "ROCK"){
                    Cscore++;
                }
                else if(result === "PAPER"){
                    Pscore++;
                }
                else if(result === "SCISSORS"){
                    console.log("Tie")
                }
            }
            console.log("PLAYER CHOSE: ", userin)
            console.log("COMPUTER CHOSE: ", result);
            console.log("Player score is: ", Pscore)
            console.log("Computer score is: ", Cscore)
        }

        round();
        counter++;
        
    }

    if(Pscore > Cscore){
        console.log("Player wins!")
    }
    else{
        console.log("Computer wins!")
    }

}    

game(5)  // Runs the game for 5 rounds 



