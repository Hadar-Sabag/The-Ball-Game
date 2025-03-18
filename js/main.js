'use strict'

var gBallSize = 100

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
}

function onFifthBallClick() {
    var elBody = document.querySelector('body')
    var randColor = getRandomColor()

    elBody.style.backgroundColor = randColor
}
