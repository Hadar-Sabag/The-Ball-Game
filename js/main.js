'use strict'

var gBallSize = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')
    const randSize = getRandomInt(20, 60)
    const randColor = getRandomColor()
    gBallSize += randSize

    if (gBallSize > 400) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
    elBall.style.backgroundColor = randColor
}
