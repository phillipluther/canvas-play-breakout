export default class Ball {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        // the ball size (0.5x, since ... radius)
        this.radius = 10;

        // how quickly the ball travels
        this.speed = 3;

        // starting position of the ball
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;

        // starting direction of the ball
        this.movingRight = true;
        this.movingDown = false;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    setXDirection() {
        let {canvas, x, movingRight, radius, speed} = this;
        this.movingRight = movingRight ?
            ((x + speed) < (canvas.width - radius)) :
            ((x - speed) < radius);
    }

    setYDirection() {
        let {canvas, y, movingDown, radius, speed} = this;
        this.movingDown = movingDown ?
            ((y + speed) < (canvas.height - radius)) :
            ((y - speed) < radius);
    }

    draw() {
        let {canvas, context, movingDown, movingRight, x, y, radius, speed} = this;

        this.setXDirection();
        this.setYDirection();

        // get our new position
        let newX = movingRight ? x + speed : x - speed;
        let newY = movingDown ? y + speed : y - speed;

        context.beginPath();
        context.arc(newX, newY, radius, 0, Math.PI * 2);
        context.fillStyle = '#f90';
        context.fill();
        context.closePath();

        this.x = newX;
        this.y = newY;
    }

    moveRight(isMovingRight = true) {
        this.movingRight = isMovingRight;
    }

    moveDown(isMovingDown = true) {
        this.movingDown = isMovingDown;
    }
}
