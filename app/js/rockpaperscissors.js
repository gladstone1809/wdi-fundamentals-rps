// ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
playToFive();
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;

function getPlayerMove(move) {

    var move = getInput();
    if (move === null) {
        getInput();
    } else {
        playerMove = move;
        getComputerMove();
    } 
    
}

function getComputerMove(move) {
    var move = randomPlay();
    if (move === null || 0) {
        randomPlay();
    } else {
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}

var winner;
function getWinner(playerMove, computerMove) {

      if (playerMove == computerMove) {
        winner = 'tie';
        return winner;
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        winner =  'player';
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        winner =  'computer';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        winner =  'player';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        winner =  'computer';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        winner =  'player';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        winner =  'computer';
    }
    else {
        getInput();
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while((playerWins < 5) && (computerWins < 5)) {

            if (winner === "player") 
            {
             playerWins ++;
            } 
            else if (winner === "computer") 
            {
             computerWins ++;
            }

            console.log('Player played: ' + playerMove +' and Computer played: ' + computerMove + '.');
            console.log('The score stands at ' + playerWins +' to ' +computerWins + '.');

        getPlayerMove();    
        
        if (playerWins === 5 || computerWins === 5) {
            console.log("Game Over!! The score is: Player: " + playerWins + "  Computer: " + computerWins);
            
        }
        if (playerWins === 5) {
            console.log("PLAYER IS VICTORIOUS!!");
        }
        else if (computerWins === 5) {
            console.log("COMPUTER IS VICTORIOUS!!");
        }
        }
    }
}