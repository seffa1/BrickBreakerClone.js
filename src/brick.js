export default class Brick {
  constructor(GAME_WIDTH, GAME_HEIGHT, positionX, positionY) {
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.GAME_WIDTH = GAME_WIDTH;
    this.position = { positionX, positionY };
  }

  draw() {}
}
