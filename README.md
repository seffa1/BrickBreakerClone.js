# BrickBreakerGame

Basic Brick Breaker clone with a general use game engine.


## Game Engine Inheritance
```javascript
// Inherit from the game class
export default class BrickBreakerGame extends Game {
  constructor(canvas, GAME_WIDTH, GAME_HEIGHT) {
    super(canvas, GAME_WIDTH, GAME_HEIGHT);
    this.setUpGame();
  }

// Then create and add entities to the game
  setUpGame() {
    // adds entities to game
    let paddle = new Paddle(this, objectIDs["paddle"]);
    new InputHandler(paddle); // event listen
    let bricks = this.generateBricks(); // array of bricks
    let ball = new Ball(this, objectIDs["ball"]);
    let score = new Score(this, objectIDs["score"]);
    // Add objects to game
    this.addEntity(paddle);
    for (let brick of bricks) {
      this.addEntity(brick);
    }
    this.addEntity(ball);
    this.addEntity(score);
  }
```

## Main Function Game Config


```javascript

function main() {
  // Game Configuration
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  let canvas = document.getElementById("gameScreen");

  // Game Creation
  let game = new BrickBreakerGame(canvas, GAME_WIDTH, GAME_HEIGHT);

  // Game Start
  game.run(); // temporary until we add menus
}
```

## Entity Creation
```javascript
// Inherit from Entity Class
export default class Brick extends Entity {
  constructor(game, id, positionX, positionY, width, height) {
    super(game, id);

// Define custom update and draw functions as needed
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

  }

  draw(context) {
    if (!context) throw new Error("Please add context as an argument");
    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
```

