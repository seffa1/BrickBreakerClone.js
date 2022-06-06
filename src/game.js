// To use this class, inherit it from a game-specific class like:
// class BrickBreakerGame extend Game {}
// and then setup that game-specific entities in that class instead

export default class Game {
  constructor(canvas, GAME_WIDTH, GAME_HEIGHT) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.playing = false;
    this.lastTime = 0;
    this.entities = {}; // {1: ['paddle'], 2: ['bricks'], 3: ['ball']}
    this.frame = 0;
    this.MAX_DELTA_TIME = 100;
  }

  // Game Loop ----------------------------------------
  gameLoop(timeStamp) {
    // Calculate delta time
    let deltaTime = timeStamp - this.lastTime;
    if (deltaTime > this.MAX_DELTA_TIME) deltaTime = this.MAX_DELTA_TIME;
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
    this.drawFPS(deltaTime);

    // Need to learn more about how 'this' is working in this line
    // https://stackoverflow.com/questions/47987307/cannot-read-property-of-null
    window.requestAnimationFrame(this.gameLoop.bind(this));
  }

  // Utils ----------------------------------------
  addEntity(entity) {
    if (!this.entities[entity.id]) {
      this.entities[entity.id] = [];
    }
    this.entities[entity.id].push(entity);
  }

  run() {
    this.gameLoop();
  }

  drawFPS(deltaTime) {
    this.context.font = "20px Georgia";
    this.context.fillStyle = "black";
    let ms = deltaTime;
    let s = deltaTime / 1000;
    let fps = 1 / s;
    // console.log(ms);

    this.context.fillText(`fps: ${Math.round(fps)}`, 5, 20);
    this.context.fillText(`dt: ${Math.round(deltaTime)}`, 5, 40);
  }
}
