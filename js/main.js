'use strict'

var gBallSize = 100

function onBallClick(maxDiameter, selector) {
    const elBall = document.querySelector(selector)
    console.log('elBall: ', elBall)
    console.log('selector: ', selector)
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
    const elBall3 = document.querySelector('.third-ball')
    const elBall2 = document.querySelector('.sec-ball')
    const elBall1 = document.querySelector('.first-ball')

    var tempText = elBall1.innerText
    elBall1.innerText = elBall2.innerText
    elBall2.innerText = tempText

    var tempColor = elBall1.style.backgroundColor
    elBall1.style.backgroundColor = elBall2.style.backgroundColor
    elBall2.style.backgroundColor = tempColor
}
