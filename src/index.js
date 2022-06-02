// https://www.w3schools.com/html/html5_canvas.asp
"use strict";
import Paddle from "./paddle.js";

let canvas = document.getElementById("gameScreen");

let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

context.clearRect(0, 0, 800, 600);

context.fillStyle = "red";
context.fillRect(20, 20, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
// paddle.draw();

let a = 5;
console.log(a);
