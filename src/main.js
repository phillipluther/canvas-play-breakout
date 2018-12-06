import {Ball, handleCollisions} from './Ball';
import Paddle from './Paddle';
import Bricks from './Bricks';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gameLoop;

let ball = new Ball(canvas);
let paddle = new Paddle(canvas);
let bricks = new Bricks(canvas, 8, 5);

function draw() {
    gameLoop = window.requestAnimationFrame(draw);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    paddle.draw();
    bricks.draw();

    handleCollisions(ball, paddle, bricks);

    if (ball.y > canvas.height + ball.radius) {
        window.cancelAnimationFrame(gameLoop);
        alert('Game over!');
        window.location.reload();
    }
}

draw();
