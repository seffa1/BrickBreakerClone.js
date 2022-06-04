// https://www.w3schools.com/html/html5_canvas.asp
"use strict";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Game from "./game.js";
import Brick from "./brick.js";

function main() {
  let running = true;

  // get canvas and context
  let canvas = document.getElementById("gameScreen");

  // create start menu

  // GAME SETUP --------------------------
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  // Create game objects
  let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
  new InputHandler(paddle);
  let bricks = generateBricks(GAME_WIDTH, GAME_HEIGHT);
  let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

  // Add objects to game
  let game = new Game(canvas, GAME_WIDTH, GAME_HEIGHT);
  game.addEntity(paddle, 1);
  for (let brick of bricks) {
    game.addEntity(brick, 2);
  }
  game.addEntity(ball, 3);

  while (running) {
    // ---playing = start_menu.run()
    let playing = true; // replace this with start menu

    while (playing) {
      game.run();

      // pause menu here
      // playing = game_menu.run()
      // running = playing
    }
  }
}

main();

function generateBricks(GAME_WIDTH, GAME_HEIGHT) {
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