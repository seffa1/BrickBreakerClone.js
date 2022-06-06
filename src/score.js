import Entity from "./entity.js";

export default class Score extends Entity {
  constructor(game, id) {
    super(game, id);
    this.totalBricks = null;
    this.bricksRemaining = null;
    this.bricksBroken = 0;
    this.lives = 3;
  }
  update(deltaTime, game) {
    this.countBricks(game);
    document.getElementById("brokenCounter").innerHTML = this.bricksBroken;
    document.getElementById("remainingCounter").innerHTML =
      this.bricksRemaining;
    document.getElementById("livesCounter").innerHTML =
      game.entities[3][0].lives; // gets ball object
  }
  draw(context) {}

  countBricks(game) {
    // Determine the starting number of bricks on first run
    if (this.totalBricks === null) {
      this.totalBricks = game.entities[2].length;
    }
    this.bricksRemaining = game.entities[2].filter(
      (brick) => brick.isBroken === false
    ).length;
    // this.bricksRemaining = game.entities[2].length;
    this.bricksBroken = this.totalBricks - this.bricksRemaining;
  }
}
