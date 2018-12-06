export default class Bricks {
    constructor(canvas, cols, rows) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        // spacing around the grid of bricks
        this.offsetX = 40;
        this.offsetY = 60;
        // spacing between invidual bricks
        this.brickPad = 10;

        this.brickHeight = 30;

        this.toClear = cols * rows;
        this.layout = this.createLayout(cols, rows);
    }

    createLayout(cols, rows) {
        let {offsetX, offsetY, brickPad, brickHeight} = this;

        let usableSpace = this.canvas.width - (offsetX * 2) - (cols * brickPad);
        let brickWidth = Math.floor(usableSpace / cols);
        let brickLayout = [];

        let col = 0;

        while (col < cols) {
            let row = 0;

            if (!brickLayout[col]) {
                brickLayout[col] = [];
            }

            while (row < rows) {
                let brick = {
                    width: brickWidth,
                    height: brickHeight,
                    cleared: false,
                    x: (col * (brickWidth + brickPad)) + offsetX,
                    y: (row * (brickHeight + brickPad)) + offsetY
                };

                brickLayout[col][row] = brick;

                row++;
            }

            col++;
        }

        return brickLayout;
    }

    draw() {
        let {context, layout} = this;

        layout.forEach(col => {
            col.forEach(brick => {
                let {cleared, x, y, width, height} = brick;

                if (cleared) {
                    return;
                }

                context.beginPath();
                context.rect(x, y, width, height);
                context.fillStyle = '#f90';
                context.fill();
                context.closePath();
            });
        });
    }
}
