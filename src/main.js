import Ball from './Ball';
import Paddle from './Paddle';
import Bricks from './Bricks';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gameLoop;

let ball = new Ball(canvas);
let paddle = new Paddle(canvas);
let bricks = new Bricks(canvas, 4, 2);

// function ballDropped() {
//     let {movingDown: ballIsFalling, x: ballX, y: ballY} = ball;
//     let {x: paddleX, y: paddleY, width: paddleWidth} = paddle;
//     let ballOnBottom = ballIsFalling && (ballY > paddleY);
//
//     return (ballOnBottom && ((ballX < paddleX) || (ballX > paddleX + paddleWidth)));
// }

function draw() {
    gameLoop = window.requestAnimationFrame(draw);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // game over conditions
    // if (ballDropped()) {
    //     // do some notice here
    //     window.cancelAnimationFrame(gameLoop);
    //     return;
    // }

    ball.draw();
    paddle.draw();
    bricks.draw();
}

canvas.addEventListener('focus', () =>  console.log('FOCUS!'));
draw();
