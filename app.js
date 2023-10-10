// app.js
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-Left');
const score = document.querySelector('#score');
const start = document.querySelector('#start')

let result = 0;
let hitPosition;
let currentTime = 30;
let timeId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}
randomSquare()

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result;
            hitPosition = null;
        }
    })
})
function moveMole() {
    timeId = setInterval(randomSquare, 550)
}
moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timeId)
    }
}
let countDownTimerId = setInterval(countDown, 1000)

