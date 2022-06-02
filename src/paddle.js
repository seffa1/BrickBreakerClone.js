export default class Paddle {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.width = 150;
    this.height = 30;
    this.position = {
      x: GAME_WIDTH / 2 - this.width / 2,
      y: GAME_HEIGHT - this.height - 10,
    };
  }

  draw(context) {
    if (!context) throw new Error("Please add context as an argument");
    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
  }
}
