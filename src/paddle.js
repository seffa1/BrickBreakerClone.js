import Entity from "./entity.js";

export default class Paddle extends Entity {
  constructor(game, id) {
    super(game, id);
    this.width = 150;
    this.height = 30;
    this.initX = this.GAME_WIDTH / 2 - this.width / 2;
    this.initY = this.GAME_HEIGHT - this.height - 10;
    this.position = {
      x: this.initX,
      y: this.initY,
    };
    this.velocity = 0; // updated by input.js eventHandler
    this.increaseABS = 0; // a velocity increase increased with each brike that breaks, via ball.js. absolute value.
    this.increase = 0;
    this.SPEED_UP_FACTOR = 0.05;
  }

  update(deltaTime, game) {
    if (!deltaTime) return;
    // Change speed up factor to correct direction
    if (this.velocity > 0) this.increase = this.increaseABS;
    if (this.velocity < 0) this.increase = -this.increaseABS;
    if (this.velocity === 0) this.increase = 0;

    // Update position
    this.position.x += (this.velocity + this.increase) * deltaTime;
    if (this.position.x + this.width >= this.GAME_WIDTH) {
      this.position.x = this.GAME_WIDTH - this.width;
    }

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    // this.velocity = 0;
  }

  draw(context) {
    if (!context) throw new Error("Please add context as an argument");
    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  speedUp() {
    this.increaseABS += this.SPEED_UP_FACTOR;
  }

  reset() {
    this.position.x = this.initX;
    this.position.y = this.initY;
    this.velocity = 0;
  }
}
