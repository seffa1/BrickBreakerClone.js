export default function drawFPS(context, deltaTime) {
  context.font = "20px Georgia";
  context.fillStyle = "black";
  let ms = deltaTime;
  let s = deltaTime / 1000;
  let fps = 1 / s;

  context.fillText(`fps: ${Math.round(fps)}`, 5, 20);
}
