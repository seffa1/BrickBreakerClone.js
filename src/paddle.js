export default class Paddle {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.width = 150;
    this.height = 30;
    this.position = {
      x: GAME_WIDTH / 2 - this.width / 2,
      y: GAME_HEIGHT - this.height - 10,
    };
    this.velocity = 0;
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.velocity * deltaTime;
    if (this.position.x + this.width >= this.GAME_WIDTH) {
      this.position.x = this.GAME_WIDTH - this.width;
    }

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    this.velocity = 0;
  }

  draw(context) {
    if (!context) throw new Error("Please add context as an argument");
    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
