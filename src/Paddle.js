export default class Paddle {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.speed = 3;

        // paddle sizing/placement
        this.width = 75;
        this.height = 10;
        this.offset = 10;

        this.x = (canvas.width - this.width) / 2;
        this.y = (canvas.height - this.height - this.offset);

        this.movingLeft = false;
        this.movingRight = false;

        window.addEventListener('keydown', ({key}) => {
            if (key === 'ArrowLeft') {
                this.movingLeft = true;
            } else if (key === 'ArrowRight') {
                this.movingRight = true;
            }
        });

        window.addEventListener('keyup', ({key}) => {
            if (key === 'ArrowLeft') {
                this.movingLeft = false;
            } else if (key === 'ArrowRight') {
                this.movingRight = false;
            }
        });
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    draw() {
        let {canvas, context, x, y, speed, movingLeft, movingRight, width, height} = this;
        let newX = x;

        if (movingLeft) {
            newX = (x - speed > 0) ? x - speed : 0;
        }

        if (movingRight) {
            let maxX = canvas.width - width;
            newX = (x + speed < maxX) ? x + speed : maxX;
        }

        context.beginPath()
        context.rect(newX, y, width, height);
        context.fillStyle = '#f90';
        context.fill();
        context.closePath();

        this.x = newX;
    }
}
