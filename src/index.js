// https://www.w3schools.com/html/html5_canvas.asp
"use strict";
import Paddle from "./paddle.js";
import drawFPS from "./dev_info.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Create game objects
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);
let bricks = generateBricks();
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

// timeStamp comes from the requestAnimationFrame function
let lastTime = 0;
function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Check events

  // Updates
  paddle.update(deltaTime);
  ball.update(deltaTime, bricks, paddle);

  // Drawing
  paddle.draw(context);
  ball.draw(context);
  for (let brick of bricks) {
    brick.draw(context);
  }

  drawFPS(context, deltaTime);

  // Tell the browser to call this function before the next repaint
  requestAnimationFrame(gameLoop);
}

gameLoop();

function generateBricks() {
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
        GAME_WIDTH,
        GAME_HEIGHT,
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
