const squares = document.querySelectorAll('.square')
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
 let timerId = null;

 //this one create the mole and makes it move randomly among the squares
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id   
}

//this gives the score when you hit the position the mole is
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
           result++
           console.log(result);
           score.textContent = result
           hitPosition = null  //this prevents you from getting more than one score per square
        }
    })
})


//this determines the speed and movement of the mole
function moveMole(){
    timerId = setInterval(randomSquare, 1000)
}

moveMole()


//this function times the game
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your final score is' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)