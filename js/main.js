'use strict'

var gBallSize = 100

function onBallClick(maxDiameter) {
    const elBall = document.querySelector('.first-ball')
    const randSize = getRandomInt(20, 60)
    const randColor = getRandomColor()
    gBallSize += randSize

    if (gBallSize > maxDiameter) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
    elBall.style.backgroundColor = randColor
}
