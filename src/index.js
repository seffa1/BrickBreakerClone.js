// https://www.w3schools.com/html/html5_canvas.asp

let canvas = document.getElementById("gameScreen");

let context = canvas.getContext("2d");
context.clearRect(0, 0, 800, 600);

context.fillStyle = "red";
context.fillRect(20, 20, 100, 100);
