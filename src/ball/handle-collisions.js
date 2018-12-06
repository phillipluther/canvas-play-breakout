export default (ball, paddle, bricks) => {
    let {
        canvas,
        movingRight: ballMovingRight,
        movingDown: ballMovingDown,
        x: ballX,
        y: ballY,
        radius: ballRadius
    } = ball;
    let {x: paddleX, y: paddleY, width: paddleWidth} = paddle;
    let {width: canvasWidth} = canvas;

    //
    // bouncing off the left/right walls
    //
    if (ballMovingRight && ballX > canvasWidth - ballRadius) {
        ball.movingRight = false;

    } else if (!ballMovingRight && ballX < ballRadius) {
        ball.movingRight = true;
    }

    //
    // bouncing off the top/paddle
    //
    if (ballMovingDown) {
        // bounced off the paddle?
        let onPaddleTop = ballY > paddleY && ballY < paddleY + 3;
        let insidePaddleEdges = (ballX > paddleX) && (ballX < paddleX + paddleWidth);

        if (onPaddleTop && insidePaddleEdges) {
            ball.movingDown = false;
        }

    } else {
        if (ballY < ballRadius) {
            ball.movingDown = true;
        }
    }

    //
    // bouncing off a brick
    //
    bricks.layout.forEach(col => {
        col.forEach(brick => {
            if (brick.cleared) {
                return;
            }

            let {x: brickX, y: brickY, width: brickWidth, height: brickHeight} = brick;

            let withinBrickX = (ballX > brickX) && (ballX < brickX + brickWidth);
            let withinBrickY = (ballY > brickY) && (ballY < brickY + brickHeight);

            if (withinBrickX && withinBrickY) {
                brick.cleared = true;
                ball.movingDown = !ball.movingDown;
            }
        });
    });
};
