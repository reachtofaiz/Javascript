const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const input = document.querySelector('#input')
const guess = document.querySelector('.guess')
const remaining = document.querySelector('.remaining')
const lowOrhigh = document.querySelector('.display')
// document.querySelector('')

const para = document.createElement('p')

let previousguess = []
let gamestart = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(input.value);
        console.log(guess);
        validation(guess)
    })
}

function validation(guess) {
    if (isNaN(guess)) {
        alert("Please Enter valid number")
    } else if (guess > 100) {
        alert("Enter less than 100")
    } else if (guess < 1) {
        alert("Enter more than one")
    } else {
        previousguess.push(guess);
        if (gamestart === 11) {
            displayguess(guess)
            displaymessage(`Game Over ... random number is ${randomNumber}`);
            endGame();
        } else {
            displayguess();
            checkguess();
        }
    }
}

function checkguess(guess) {

}

function displayguess(guess) {

}

function displaymessage(message) {

}

function endGame() {

}

function newGame() {

}
