// https://www.w3schools.com/html/html5_canvas.asp
"use strict";
import BrickBreakerGame from "./brickBreakerGame.js";

function main() {
  // Game Configuration
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  let canvas = document.getElementById("gameScreen");

  // Game Creation
  let game = new BrickBreakerGame(canvas, GAME_WIDTH, GAME_HEIGHT);

  // Game Start
  game.run(); // temporary until we add menus
}

main();
