// https://www.w3schools.com/html/html5_canvas.asp
"use strict";
import Paddle from "./paddle.js";
import drawFPS from "./dev_info.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);
let lastTime = 0;

// timeStamp comes from the requestAnimationFrame function
function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  drawFPS(context, deltaTime);

  paddle.update(deltaTime);
  paddle.draw(context);

  // Tell the browser to call this function before the next repaint
  requestAnimationFrame(gameLoop);
}

gameLoop();
