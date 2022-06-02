export default class Ball {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.width = 10;
    this.height = 10;
    this.position = {
      x: GAME_WIDTH / 2 - this.width / 2,
      y: GAME_HEIGHT / 2 + self.height + 10,
    };
    this.velocity = { x: 0, y: 1 };
  }

  update(deltaTime, bricks, paddle) {
    if (!deltaTime) return;
    if (!bricks || !paddle) throw new Error("Please add all arguments!");
    // advance position based on velocity
    // check if colliding with blocks, if so, kill the block and adjust velocity based on collision type (top, right side, or left side)
    // check if out of bounds, if so, adjust velocity based on collision type (top, right, left)
    // check if colliding with paddle, if so, reverse y velocity
    // check if off the screen on the bottom, if so, respawn at middle and player loses a life
    // check if no lives left
  }

  draw(context) {
    if (!context) throw new Error("Please add context as an argument");
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
