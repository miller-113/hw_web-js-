let queryNick = document.querySelector('#nickForm')

let tableScore = {
    'playerName': undefined,
    'botName': 'Bot',
    'playerScr': [],
    'botScr': [],
    'date': [],
}

let nickName = undefined
let firstGame = true
nickForm.style.position = 'absolute'
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 10;
let ballX = cw/2;
let ballY = ch/2;
const platformHeight = 100;
const platformWidth = 14;

const playerX = cw - 70;
const botX = 70;

let playerY = 200;
let botY = 200;

let ballSpeedX = 4
let ballSpeedY = 2.5

let topCanvas = undefined

let botScr = 0;
let playerScr = 0;

let gameInterval = undefined

let mouseX;
let mouseY;
//game logic
let botPower = 90
function sleep(ms) {
    let currentTime = Date.now()
    while (currentTime + ms > Date.now()) {
    }
}

function player() {
    ctx.beginPath();
    ctx.fillStyle = 'gold'
    ctx.roundRect(playerX, playerY, platformWidth, platformHeight, 10);
    ctx.fill()
}

function bot() {
    ctx.beginPath();
    ctx.fillStyle = 'silver'
    ctx.roundRect(botX, botY, platformWidth, platformHeight, 10)
    ctx.fill()
    let randomNum = Math.floor(Math.random() * 100)
    botY = (randomNum > botPower) ? ballY - platformHeight / 2 : botY
    if (botY < 0) {
        botY = 0
    }
    if (botY > ch - platformHeight) {
        botY = ch - platformHeight
    }
    if (ballX - platformWidth <= botX && ballY >= botY - ballSize && ballY <= botY + platformHeight && ballX >= botX) {
        ballSpeedX = -ballSpeedX;
        speedUp()
    }
}

function table() {
    ctx.beginPath()

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = '#CECCCC';
    ctx.beginPath()

    ctx.fillRect(cw / 2 - 2, 0, 4, 4000)
    ctx.rect(cw / 2, 0, 4, 4000)
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'pink';
    ctx.stroke()
}

function ball() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2, true);
    ctx.fill();

    ballX += ballSpeedX
    ballY += ballSpeedY
    if (ballY - ballSize <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY
    }
    if (ballX - platformWidth <= playerX
        && ballY >= playerY - ballSize
        && ballY <= playerY + platformHeight
        && ballX >= playerX) {
        ballSpeedX = -ballSpeedX;
        speedUp()
    }
    if (ballX + ballSize >= cw) {
        botScr += 1
        sleep(1000)
        endRound()
        ballSpeedX = -ballSpeedX
    } else if (ballX - ballSize <= 0) {
        playerScr += 1
        sleep(1000)
        endRound()
        ballSpeedX = -ballSpeedX
    }
}

function endRound() {
    setTimeout(function () {
    }, 1000)
    ballX = cw / 2;
    ballY = ch / 2;
    ballSpeedX = 4
    ballSpeedY = 2.5
}

function playerPosition(e) {
    topCanvas = canvas.offsetTop
    playerY = e.clientY - topCanvas - platformHeight / 2
    if (playerY < 0) {
        playerY = 0
    }
    if (playerY > ch - platformHeight) {
        playerY = ch - platformHeight
    }
}

canvas.addEventListener('mousemove', playerPosition)

function speedUp() {
    if (ballSpeedX > 0 && ballSpeedX < 15) {
        ballSpeedX += .5
        // ballSpeedY += -1
        if (ballSpeedY > 0) {
            ballSpeedY += .2
        }


    } else if (ballSpeedX < 0 && ballSpeedX > -15) {
        ballSpeedX -= .5
        if (ballSpeedY < 0) {
            ballSpeedY -= .2
        }
    }
}
// end

// main menu
function scores(botScr, playerScr) {
    ctx.font = "50px serif";
    ctx.fillStyle = 'red'
    ctx.fillText(botScr, cw / 2 - 25 / 2 - 250, 50, 25)
    ctx.fillText(playerScr, cw / 2 - 25 / 2 + 250, 50, 25)
}
function startMenu() {
    menu()
    canvas.addEventListener("mousemove", checkPos);
    canvas.addEventListener("mouseup", checkClick);
}

function stopMenu() {
    canvas.removeEventListener("mousemove", checkPos)
    canvas.removeEventListener("mouseup", checkClick)
}
function showScoreAfterGame(playerScr, botScr) {
    if (playerScr > botScr) {
        ctx.beginPath()
        ctx.fillStyle = '#02440a';
        ctx.font = '500px'
        ctx.fillText(`You win with score ${playerScr}:${botScr}`,
            cw / 2 - 400 / 2, 150, 400)
        ctx.stroke()
    } else {
        ctx.fillStyle = 'red'
        ctx.font = '500px'
        ctx.fillText(`You lose with score ${playerScr}:${botScr}`,
            cw / 2 - 400 / 2, 150, 400)
    }
}


let buttonX = [450,430, 450, 450];
let buttonY = [130,210,290, 370];
let buttonWidth = [100, 150, 100, 100];
let buttonHeight = [60, 60, 60, 60];
let buttonText = ['Play', 'Options', 'Scores', 'Credits'];
let time = 0.0;

function menu() {
    ctx.beginPath()
    ctx.fillStyle = '#343434FF'
    ctx.roundRect(cw / 2 - 450 / 2, ch / 2 - 400 / 2, 450, 400, 10)
    ctx.fill()
    ctx.font = "60px serif";
    ctx.fillStyle = '#CECCCC';
    ctx.fillText('Play', 450, 130, 100)
    ctx.fillText('Options', 430, 210, 150)
    ctx.fillText('Scores', 450, 290, 100)
    ctx.fillText('Credits', 450, 370, 100)
}

function checkPos(e) {
    if (e.pageX || e.pageY === 0) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop + 50;
    } else if (e.offsetX || e.offsetY === 0) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    for (let i = 0; i < buttonX.length; i++) {
        if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
            if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                ctx.fillStyle = 'red'
                ctx.fillText(buttonText[i], buttonX[i], buttonY[i], buttonWidth[i])
            }
        } else {
            menu()
        }
    }
}
function checkClick() {
    for (let i = 0; i < buttonX.length; i++) {
        if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
            if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                if (buttonText[i] === 'Play') {
                    if (firstGame) {
                        ctx.fillStyle = 'black'
                        stopMenu()
                        ctx.fillRect(cw / 2 - 450 / 2, ch / 2 - 400 / 2, 450, 400)

                        queryNick.style.visibility = 'visible'
                        document.body.style.background = 'rgba(0, 0, 0, 0.8)'
                        queryNick.addEventListener('submit', function (e) {
                            e.preventDefault()
                            if (inp_nick.value) {
                                queryNick.style.display = 'none'
                                nickName = inp_nick.value
                                firstGame = false
                            }
                            document.body.style.background = ''
                            gameInterval = setInterval(game, 1000 / 60)
                        })
                    }
                    if (queryNick.style.display === 'none') {
                        gameInterval = setInterval(game, 1000 / 60)
                        canvas.removeEventListener('mousemove', checkPos)
                        canvas.removeEventListener("mouseup", checkClick)
                    }
                } else if (buttonText[i] === 'Scores') {
                    showScore()
                } else if (buttonText[i] === 'Credits') {
                    showAbout()
                }else if (buttonText[i] === 'Options'){
                    showOptions()
                }else{
                    stopMenu()
                    startMenu()
                }
            }
        }
    }
}
const bgImage = new Image();

function showScore() {
    ctx.font = "20px Arial"
    bgImage.src = "Images/1000-x-500-пикселей-картинки-для-ютуба-скачать-бесплатно-10 копия 2.jpg";
    bgImage.addEventListener('load', function () {
        ctx.drawImage(bgImage, 0, 0);
        ctx.fillStyle = 'red'
        ctx.fillText(`${tableScore.playerName}`, 110, 160, 300)
        for (let i = 0; i < tableScore.playerScr.length * 44 && i < 44 * 8; i += 44) {
            ctx.fillStyle = 'white'
            ctx.font = "20px Arial"
            ctx.fillText(`   ${tableScore.playerScr[i / 44]}:${tableScore.botScr[i / 44]}                                                              ${tableScore.date[i / 44].getHours()}:${tableScore.date[i / 44].getMinutes()}`, cw / 2 - 50, 160 + i, 600)
        }
    })
    stopMenu()
    setTimeout(startMenu, 5000)
    setTimeout(clearHolst, 4990)
}

function clearHolst() {
    ctx.clearRect(0, 0, cw, ch)
}

function showAbout() {
    ctx.fillStyle = 'black'
    ctx.fillRect(cw / 2 - 450 / 2, ch / 2 - 400 / 2, 450, 400)
    ctx.fillStyle = 'white'
    ctx.fillText('Game created by', 300, 150)
    ctx.fillText('Nikita shkurat', 300, 230)
    ctx.fillText('23.11.2022', 300, 310)
    stopMenu()
    setTimeout(startMenu, 5000)
    setTimeout(clearHolst, 4990)
}
// end

//Options
let fromOptBtnX = [112, 393, 774]
let fromOptBtnY = [275, 275, 275]
let toOptBtnX = [240, 620, 910]
let toOptBtnY = [364, 364, 364]
const optionsImg = new Image()

function eventOptions() {
    ctx.drawImage(optionsImg, 0, 0);
    canvas.addEventListener('mousemove', checkPosOpts)
    canvas.addEventListener('mouseup', checkOptsClick)

}

function showOptions() {
    optionsImg.src = "Images/Без имени-1.jpg";
    optionsImg.addEventListener('load', eventOptions)
    stopMenu()
}

function checkOptsClick() {
    for (let i = 0; i < fromOptBtnX.length; i++) {
        if (mouseX > fromOptBtnX[i] && mouseX < toOptBtnX[i]) {
            if (mouseY > fromOptBtnY[i] && mouseY < toOptBtnY[i] + buttonHeight[i]) {
                if (fromOptBtnX[i] === 112){
                    botPower = 96
                }else if(fromOptBtnX[i] === 393){
                    botPower = 90
                }else if(fromOptBtnX[i] === 774){
                    botPower = 80
                }
            }
        }else {

            clearHolst()
            startMenu()
        }
    }
    removeEventListener('load', eventOptions)
    removeEventListener('mousemove', checkPosOpts)
    removeEventListener('mouseup', checkOptsClick)
}
function checkPosOpts(e){
    if (e.pageX || e.pageY === 0) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop + 50;
    } else if (e.offsetX || e.offsetY === 0) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    for (let i = 0; i < fromOptBtnX.length; i++) {
            if (mouseX > fromOptBtnX[i] && mouseX < toOptBtnX[i]) {
                if (mouseY > fromOptBtnY[i] && mouseY < toOptBtnY[i] + buttonHeight[i]) {
                    // ctx.fillStyle = 'red'
                    // // ctx.fillText(buttonText[i], buttonX[i], buttonY[i], buttonWidth[i])
                    // ctx.beginPath()
                    // ctx.lineWidth = 5
                    // ctx.strokeStyle = 'red'
                    // ctx.rect(fromOptBtnX[i]-5, fromOptBtnY[i]-55, toOptBtnX[i]-fromOptBtnX[i], toOptBtnY[i]-fromOptBtnY[i]-20)
                    // ctx.stroke()
                }
            } else {
                // setTimeout(showOptions, 2000)
            }
        }
}

// start game
startMenu()
function game() {
    table()
    ball()
    player()
    bot()
    scores(botScr, playerScr)
    if (playerScr === 5 || botScr === 5) {
        showScoreAfterGame(playerScr, botScr)

        let tempInterval = setTimeout(function () {
            startMenu()
        }, 3000)
        clearInterval(gameInterval)
        tableScore.playerName = nickName
        tableScore.playerScr.push(playerScr)
        tableScore.botScr.push(botScr)
        tableScore.date.push(new Date());
        playerScr = 0
        botScr = 0
    }
    console.log(ballSpeedX, ballSpeedY)
}

//end