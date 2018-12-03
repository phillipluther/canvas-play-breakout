import Ball from './Ball';
import Paddle from './Paddle';
import Bricks from './Bricks';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gameLoop;
let isPaused = false;

let ball = new Ball(canvas);
let paddle = new Paddle(canvas);
let bricks = new Bricks(canvas, 4, 2);

function draw() {
    gameLoop = window.requestAnimationFrame(draw);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    paddle.draw();
    bricks.draw();

    // ballX += deltaX;
    // ballY += deltaY;
    //
    // if ((ballX + deltaX < ballRadius) || (ballX + deltaX > canvas.width - ballRadius)) {
    //     deltaX = -deltaX;
    // }
    //
    // if (ballY + deltaY < ballRadius) {
    //     deltaY = -deltaY;
    //
    // } else if (ballY + deltaY > canvas.height + ballRadius) {
    //     if ((ballX > paddleX) && (ballX < paddleX + paddleWidth)) {
    //         deltaY = -deltaY;
    //
    //     } else {
    //         // clearInterval(gameLoop);
    //         window.cancelAnimationFrame(gameLoop);
    //         alert('Game over!');
    //         document.location.reload();
    //     }
    // }
    //
    // if (movingRight && (paddleX < canvas.width - paddleWidth)) {
    //     paddleX += 7;
    // }
    //
    // if (movingLeft && (paddleX > 0)) {
    //     paddleX -= 7;
    // }
}

// window.addEventListener('keydown', handleKeyDown);
// window.addEventListener('keyup', handleKeyUp);

// gameLoop = setInterval(draw, 16);
canvas.focus();

window.addEventListener('blur', () => {
    isPaused = true;
    window.cancelAnimationFrame(gameLoop);
});

window.addEventListener('focus', () => {
    if (isPaused) {
        canvas.focus();
        draw();
    }
});

draw();
