import Entity from "./entity.js";

export default class Brick extends Entity {
  constructor(game, id, positionX, positionY, width, height) {
    super(game, id);
    this.width = width;
    this.height = height;
    this.position = { x: positionX, y: positionY };
    this.isBroken = false;
  }

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
