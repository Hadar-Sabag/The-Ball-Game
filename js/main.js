'use strict'

var gBallSize = 100

function onBallClick() {
    var elBall = document.querySelector('.ball')
    var randSize = getRandomInt(20, 60)
    gBallSize += randSize

    if (gBallSize > 400) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
}
