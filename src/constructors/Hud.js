export default class Hud {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.lives = 3;
        this.score = 0;
    }

    draw() {
        let {canvas, context, score, lives} = this;

        context.font = '1.25rem monospace';
        context.fillStyle = '#994900';
        context.fillText(`Score: ${score}`, 40, 30);
        context.fillText(`Lives: ${lives}`, canvas.width - 150, 30);
    }
}
