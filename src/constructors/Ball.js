export default class Ball {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        // the ball size (0.5x, since ... radius)
        this.radius = 10;

        // how quickly the ball travels
        this.speed = 6;

        // starting position of the ball
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;

        // starting direction of the ball
        this.movingRight = true;
        this.movingDown = false;
    }

    setNextPosition() {
        let {movingRight, movingDown, speed, x, y} = this;
        let nextX = movingRight ? x + speed : x - speed;
        let nextY = movingDown ? y + speed : y - speed;

        this.x = nextX;
        this.y = nextY;
    }

    draw() {
        this.setNextPosition();
        let {context, x, y, radius} = this;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = '#f90';
        context.fill();
        context.closePath();
    }
}
