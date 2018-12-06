import Canvas from './constructors/Canvas';
import Hud from './constructors/Hud';
import Ball from './constructors/Ball';
import Paddle from './constructors/Paddle';
import Bricks from './constructors/Bricks';
import handleCollisions from './logic/handle-collisions';

let gameLoop;

let canvas = new Canvas();
let hud = new Hud(canvas.el);
let ball = new Ball(canvas.el);
let paddle = new Paddle(canvas.el);
let bricks = new Bricks(canvas.el, 8, 5);

function draw() {
    gameLoop = window.requestAnimationFrame(draw);

    canvas.context.clearRect(0, 0, canvas.el.width, canvas.el.height);

    ball.draw();
    paddle.draw();
    bricks.draw();
    hud.draw();

    handleCollisions(ball, paddle, bricks, () => {
        hud.score += 100;
    });

    if (ball.y > canvas.el.height + ball.radius) {

        if (hud.lives > 0) {
            hud.lives--;
            ball = new Ball(canvas.el);

        } else {
            window.cancelAnimationFrame(gameLoop);
            alert('Game over!');
            window.location.reload();
        }
    }

    if (bricks.toClear === 0) {
        window.cancelAnimationFrame(gameLoop);
        alert('You win!');
        window.location.reload();
    }
}

draw();
