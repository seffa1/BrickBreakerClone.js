export default class Game {
  constructor(canvas, GAME_WIDTH, GAME_HEIGHT) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.playing = false;
    this.lastTime = 0;
    this.entities = {}; // {1: ['paddle'], 2: ['bricks'], 3: ['ball']}
  }

  // Game Loop ----------------------------------------
  gameLoop(timeStamp) {
    // Calculate delta time
    let deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    // Clear screen
    this.context.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);

    // Update objects
    for (let id in this.entities) {
      for (let entity of this.entities[id]) {
        entity.update(deltaTime, this);
      }
    }

    // Draw Objects
    for (let id in this.entities) {
      for (let entity of this.entities[id]) {
        entity.draw(this.context);
      }
    }
    this.drawFPS(this.context, deltaTime);

    // Repeat
    // requestAnimationFrame(gameLoop); // this causes the browser to crash
    console.log(this);
    // solution i think -> https://stackoverflow.com/questions/28908999/use-requestanimationframe-in-a-class
  }

  // Utils ----------------------------------------
  addEntity(entity, id) {
    if (!this.entities[id]) {
      this.entities[id] = [];
    }
    this.entities[id].push(entity);
  }

  run() {
    this.playing = true;
    while (this.playing) {
      this.gameLoop();
    }
  }

  drawFPS(deltaTime) {
    this.context.font = "20px Georgia";
    this.context.fillStyle = "black";
    let ms = deltaTime;
    let s = deltaTime / 1000;
    let fps = 1 / s;

    this.context.fillText(`fps: ${Math.round(fps)}`, 5, 20);
    this.context.fillText(`dt: ${Math.round(deltaTime)}`, 5, 40);
  }
}
