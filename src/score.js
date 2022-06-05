export default class Score {
  constructor() {
    this.totalBricks = null;
    this.bricksRemaining = null;
    this.bricksBroken = 0;
  }
  update(deltaTime, game) {
    this.countBricks(game);
    document.getElementById("brokenCounter").innerHTML = this.bricksBroken;
    document.getElementById("remainingCounter").innerHTML =
      this.bricksRemaining;
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
    console.log(this.bricksRemaining);
    this.bricksBroken = this.totalBricks - this.bricksRemaining;
  }
}
