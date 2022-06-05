export default class Brick {
  constructor(GAME_WIDTH, GAME_HEIGHT, positionX, positionY, width, height) {
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.GAME_WIDTH = GAME_WIDTH;
    this.width = width;
    this.height = height;
    this.position = { x: positionX, y: positionY };
    this.isBroken = false;
  }

  update(deltaTime, game) {}

  draw(context) {
    if (!context) throw new Error("Please add context");
    context.fillStyle = "blue";
    if (this.isBroken) context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  break() {
    this.isBroken = true;
  }
}
