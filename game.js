export default class Game {
  constructor(canvas, context, GAME_WIDTH, GAME_HEIGHT) {
    this.canvas = canvas;
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.playing = false;
  }

  run() {
    this.playing = true;
    while (this.playing) {
      this.update();
      this.draw();
    }
  }

  update() {}

  draw() {}
}
