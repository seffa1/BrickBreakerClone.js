import Game from "./game.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import Score from "./score.js";
import { objectIDs } from "./config.js";

export default class BrickBreakerGame extends Game {
  constructor(canvas, GAME_WIDTH, GAME_HEIGHT) {
    super(canvas, GAME_WIDTH, GAME_HEIGHT);
    this.setUpGame();
  }
  setUpGame() {
    // adds entities to game
    let paddle = new Paddle(this, objectIDs["paddle"]);
    new InputHandler(paddle); // event listen
    let bricks = this.generateBricks(); // array of bricks
    let ball = new Ball(this, objectIDs["ball"]);
    let score = new Score(this, objectIDs["score"]);
    // Add objects to game
    this.addEntity(paddle);
    for (let brick of bricks) {
      this.addEntity(brick);
    }
    this.addEntity(ball);
    this.addEntity(score);
  }

  generateBricks() {
    let bricks = [];

    const columns = 7;
    const brickWidth = 80;
    const leftMargin = 30;
    const brickRightMargin = 30;

    const rows = 5;
    const brickHeight = 30;
    const topMargin = 10;
    const brickBottomMargin = 10;

    let position = { x: leftMargin, y: topMargin };

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        let brick = new Brick(
          this,
          objectIDs["brick"],
          position.x,
          position.y,
          brickWidth,
          brickHeight
        );
        bricks.push(brick);
        // goto next column
        position.x += brickWidth + brickRightMargin;
      }
      // go to next row down and reset column
      position.y += brickHeight + brickBottomMargin;
      position.x = leftMargin;
    }
    return bricks;
  }
}
