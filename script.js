// SELECTAT(hämtat) ok-knappen fron DOM:en 
const okButton = document.querySelector('#ok');

// Skapat ett P element som heter usernameP
const usernameP = document.createElement('p');

// lagt till p elementet till bodyn
document.body.append(usernameP);

let input;
let computer;
let playerScore = 0;
let computerScore = 0;
let points = 0;

const winnerOfTheGameP = document.querySelector('#winnerOfTheGameP');
const winnerOfTheRoundP = document.querySelector('#winnerOfTheRoundP');
const playerScoreP = document.querySelector('#playerScoreP');
const computerScoreP = document.querySelector('#computerScoreP');
const playersChoiceP = document.querySelector('#playersChoiceP');
const computersChoiceP = document.querySelector('#computersChoiceP');

const rockOption = 0;
const paperOption = 1;
const scissorsOption = 2;

//Array för de olika alternativen 
const options = ['Rock', 'Paper', 'Scissors'];


okButton.addEventListener('click', event => {
    event.preventDefault();
    // Hämtar värdet från input-boxen
    input = document.querySelector('#input').value;

    // Tilldelar ditt p element usernameP till värdet från input-boxen.
    usernameP.innerText = `Hello, ${input}! Please make a choice from the buttons above.`
});

//Hämtar rock-knappen från DOM:en
const rockButton = document.querySelector('#rock');

//Arrow-function för rock-knappen
rockButton.addEventListener('click', event => {
    // Visar användarens val
    playersChoiceP.innerText = `${input} chose: Rock`;

    //När antingen användaren eller datorn får tre poäng kommer deras allt att nollställas
    if (playerScore === 3 || computerScore === 3) {
        playerScore = 0;
        computerScore = 0;

        playersChoiceP.innerText = 'Players choice: ';
        computersChoiceP.innerText = 'Computers choice: '

        playerScoreP.innerText = 'Player Score: '
        computerScoreP.innerText = 'Computer Score: '

        winnerOfTheGameP.innerText = 'Winner of the game is:';
        winnerOfTheRoundP.innerText = 'Winner of the round is:';

        //Om ingen har nått 3 poäng ska resten av alternativen köras när man trycker på någon av knapparna
    } else {
        //Math.random() so  genererar siffron 0 till 2. 0===Rock , 1===Paper, 2===Scissors
        computer = Math.floor(Math.random() * 3);

        if (computer === 0) {
            computersChoiceP.innerText = 'Computer chose: Rock';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Draw!';
        }
        else if (computer === 1) {
            computersChoiceP.innerText = 'Computer chose: Paper';
            computerScore++;
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Computer';
        }
        else {
            computersChoiceP.innerText = 'Computer chose: Scissors';
            playerScore++;
            winnerOfTheRoundP.innerText = `Winner of the round is: ${input}`
            playerScoreP.innerText = `${input}s Score: ${playerScore}`
            computerScoreP.innerText = `Computers Score: ${computerScore}`;


        }

        if (playerScore === 3) {
            winnerOfTheGameP.innerText = `Winner of the game is: ${input}!`;

        } else if (computerScore === 3) {
            winnerOfTheGameP.innerText = 'Winner of the game is: Computer!';

        }
    }


})

//Hämtar paper-knappen från DOM:en
const paperButton = document.querySelector('#paper');

//Arrow-function för paper-knappen
paperButton.addEventListener('click', event => {


    playersChoiceP.innerText = `${input} chose: Paper`;

    if (playerScore === 3 || computerScore === 3) {
        playerScore = 0;
        computerScore = 0;

        playersChoiceP.innerText = 'Players choice: ';
        computersChoiceP.innerText = 'Computers choice: ';

        winnerOfTheGameP.innerText = 'Winner of the game is:';
        winnerOfTheRoundP.innerText = 'Winner of the round is:';

        playerScoreP.innerText = 'Player Score: '
        computerScoreP.innerText = 'Computer Score: ';

        //Om ingen har nått 3 poäng ska resten av alternativen köras när man trycker på någon av knapparna
    } else {

        //Math.random() so  genererar siffron 0 till 2. 0===Rock , 1===Paper, 2===Scissors
        computer = Math.floor(Math.random() * 3);


        if (computer === 0) {
            playerScore++;
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computer Score: ${computerScore}`;
            computersChoiceP.innerText = 'Computer chose: Rock';
            winnerOfTheRoundP.innerText = `Winner of the round: ${input}`;

        }
        else if (computer === 1) {
            computersChoiceP.innerText = 'Computer chose: Paper';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Draw!';

        }
        else {
            computerScore++;
            computersChoiceP.innerText = 'Computer chose: Scissors';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Computer';

        }
        //visar vem som vinner
        if (playerScore === 3) {
            winnerOfTheGameP.innerText = `Winner of the game is: ${input}`;

        } else if (computerScore === 3) {
            winnerOfTheGameP.innerText = 'Winner of the game is: Computer';

        }
    }

})

//Hämtar scissors-knappen från DOM:en
const scissorsButton = document.querySelector('#scissors');

//Arrow-function för scissors-knappen
scissorsButton.addEventListener('click', event => {
    playersChoiceP.innerText = `${input} chose: Scissors`;

    if (playerScore === 3 || computerScore === 3) {
        playerScore = 0;
        computerScore = 0;

        playersChoiceP.innerText = 'Players choice: ';
        computersChoiceP.innerText = 'Computers choice: ';

        winnerOfTheGameP.innerText = 'Winner of the game is:';
        winnerOfTheRoundP.innerText = 'Winner of the round is:';

        playerScoreP.innerText = 'Player Score: '
        computerScoreP.innerText = 'Computer Score: ';

        //Om ingen har nått 3 poäng ska resten av alternativen köras när man trycker på någon av knapparna
    } else {

        //Math.random() so  genererar siffron 0 till 2. 0===Rock , 1===Paper, 2===Scissors
        computer = Math.floor(Math.random() * 3);


        if (computer === 0) {
            computerScore++;
            computerScoreP.innerText = `Computer Score: ${computerScore}`;
            playerScoreP.innerText = `${input} Score: ${playerScore}`;
            computersChoiceP.innerText = 'Computer chose: Rock'
            winnerOfTheRoundP.innerText = 'Winner of the round: Computer';

        }
        else if (computer === 1) {
            computersChoiceP.innerText = 'Computer chose: Paper';
            playerScore++;
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computer Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = `Winner of the round: ${input}`;

        }
        else {

            computersChoiceP.innerText = 'Computer chose: Scissors';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Draw!';
        }



        //visar vem som fick 3 poäng först och vann
        if (playerScore === 3) {
            winnerOfTheGameP.innerText = `Winner of the game is: ${input}!`;

        } else if (computerScore === 3) {
            winnerOfTheGameP.innerText = 'Winner of the game is: Computer';
        }
    }

})

