'use strict'

var gBallSize = 100
var gMoves = 0
var gTimer = 0
var timerInterval

function onBallClick(maxDiameter, selector) {
    const elBall = document.querySelector(selector)
    const randSize = getRandomInt(20, 60)
    const randColor = getRandomColor()

    gBallSize += randSize

    if (gBallSize > maxDiameter) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
    elBall.style.backgroundColor = randColor

    gMoves++
    setcountMoves()

    if (!timerInterval) {
        startTimer()
    }
}

function onThirdBallClick() {
    // const elBall3 = document.querySelector('.third-ball')
    const elBall2 = document.querySelector('.sec-ball')
    const elBall1 = document.querySelector('.first-ball')

    var tempText = elBall1.innerText
    elBall1.innerText = elBall2.innerText
    elBall2.innerText = tempText

    var tempColor = elBall1.style.backgroundColor
    elBall1.style.backgroundColor = elBall2.style.backgroundColor
    elBall2.style.backgroundColor = tempColor

    gMoves++
    setcountMoves()

    if (!timerInterval) {
        startTimer()
    }
}

function onFourthBallClick(maxDiameter1, maxDiameter2) {
    const elBall2 = document.querySelector('.sec-ball')
    const elBall1 = document.querySelector('.first-ball')
    const randSize = getRandomInt(20, 60)

    if (gBallSize > maxDiameter1) gBallSize = maxDiameter1
    if (gBallSize > maxDiameter2) gBallSize = maxDiameter2

    if (maxDiameter1 < 100) maxDiameter1 = 100
    if (maxDiameter2 < 100) maxDiameter2 = 100

    maxDiameter1 -= randSize
    maxDiameter2 -= randSize

    elBall1.style.width = maxDiameter1 + 'px'
    elBall1.style.height = maxDiameter1 + 'px'
    elBall1.innerText = maxDiameter1

    elBall2.style.width = maxDiameter2 + 'px'
    elBall2.style.height = maxDiameter2 + 'px'
    elBall2.innerText = maxDiameter2

    gMoves++
    setcountMoves()

    if (!timerInterval) {
        startTimer()
    }
}

function onFifthBallClick() {
    const elBody = document.querySelector('body')
    var randColor = getRandomColor()

    elBody.style.backgroundColor = randColor

    gMoves++
    setcountMoves()

    if (!timerInterval) {
        startTimer()
    }
}

function onSixthBallClick() {
    const elBall2 = document.querySelector('.sec-ball')
    const elBall1 = document.querySelector('.first-ball')

    elBall1.style.width = 100 + 'px'
    elBall1.style.height = 100 + 'px'
    elBall1.innerText = 100
    elBall1.style.backgroundColor = 'rgb(49, 99, 83)'

    elBall2.style.width = 100 + 'px'
    elBall2.style.height = 100 + 'px'
    elBall2.innerText = 100
    elBall2.style.backgroundColor = 'rgb(122, 84, 157)'

    document.querySelector('body').style.backgroundColor = 'black'
    gMoves = 0
    document.querySelector('.count').innerText = gMoves

    stopTimer()
    document.querySelector('.timer').innerText = '000'
}

function setcountMoves() {
    var elcount = document.querySelector('.count')
    elcount.innerText = gMoves
}

function startTimer() {
    timerInterval = setInterval(function () {
        gTimer++
        var formattedTime = String(gTimer).padStart(3, '0')

        document.querySelector('.timer').innerText = formattedTime
    }, 1000)
}

function stopTimer() {
    clearInterval(timerInterval)
    timerInterval = null
}

