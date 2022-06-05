export default class Ball {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.width = 10;
    this.height = 10;
    this.initX = GAME_WIDTH / 2 - this.width / 2;
    this.initY = GAME_HEIGHT / 2 + this.height;
    this.position = {
      x: this.initX,
      y: this.initY,
    };
    this.velocity = { x: 0, y: 0.4 };
    this.SPEED_UP_FACTOR = 0.03;
    this.lives = 3;
  }

  update(deltaTime, game) {
    if (this.lives < 1) {
      alert("Refresh to continue");
      return;
    }
    let bricks = game.entities[2]; // an array of bricks
    let paddle = game.entities[1][0];

    if (!deltaTime) return;
    if (!bricks || !paddle) throw new Error("Please add all arguments!");

    // advance position based on velocity in x-direction
    this.position.x += this.velocity.x * deltaTime;
    // x-direction collisions ------------------------------------------------------------
    // with canvas boundaries
    // check if out of bounds, if so, adjust velocity based on collision type
    if (this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x = -this.velocity.x;
    }
    if (this.position.x + this.width > this.GAME_WIDTH) {
      this.position.x = this.GAME_WIDTH - this.width;
      this.velocity.x = -this.velocity.x;
    }
    // with bricks
    // check if colliding with blocks, if so, kill the block and adjust velocity based on collision type
    for (let brick of bricks) {
      if (!brick.isBroken) {
        if (this.isCollided(brick)) {
          brick.break();
          this.velocity.x = -this.velocity.x;
        }
      }
    }

    // advance position based on velocity in y-direction
    this.position.y += this.velocity.y * deltaTime;
    // y-direction collisions ------------------------------------------------------------
    // with canvas boundaries
    // check if out of bounds, if so, adjust velocity based on collision type
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y = -this.velocity.y;
    }
    // check if out of bounds off the bottom, then lose life and restart
    if (this.position.y > this.GAME_HEIGHT) {
      console.log("position y " + this.position.y);
      this.lives--;
      if (this.lives === 0) {
        alert("Game Over, refresh to play");
      }
      this.reset(game);
    }

    // with bricks
    // check if colliding with blocks, if so, kill the block and adjust velocity based on collision type
    for (let brick of bricks) {
      if (!brick.isBroken) {
        if (this.isCollided(brick)) {
          brick.break();
          this.velocity.y = -this.velocity.y;
          this.speedUp();
          paddle.speedUp();
        }
      }
    }
    // with paddle
    // check if colliding with paddle, if so, change velocity based on paddle velocity
    if (this.isCollided(paddle)) {
      //---> no paddle velocity or paddle velocity opposite of balls, flip ball y velocity
      this.velocity.y = -this.velocity.y;
      //---> paddle velocity not zero, and same direction as ball, flip ball x velotiy
      if (paddle.velocity != 0) {
        this.velocity.x += -paddle.velocity / 10;
      }
    }

    // check if off the screen on the bottom, if so, respawn at middle and player loses a life
    // check if no lives left
  }

  draw(context) {
    if (!context) throw new Error("Please add context as an argument");

    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  isCollided(object) {
    // The x position of the ball is greater than the x position of the brick.
    if (this.position.x + this.width < object.position.x) {
      // console.log("Failed test 1");
      return false;
    }
    // The x position of the ball is less than the x position of the brick plus its width.
    if (this.position.x > object.position.x + object.width) return false;
    // The y position of the ball is greater than the y position of the brick.
    if (this.position.y + this.height < object.position.y) return false;
    // The y position of the ball is less than the y position of the brick plus its height.
    if (this.position.y > object.position.y + object.height) return false;
    return true;
  }

  speedUp() {
    if (this.velocity.x > 0) this.velocity.x += this.SPEED_UP_FACTOR;
    if (this.velocity.x < 0) this.velocity.x -= this.SPEED_UP_FACTOR;
    if (this.velocity.y > 0) this.velocity.y += this.SPEED_UP_FACTOR;
    if (this.velocity.y < 0) this.velocity.x -= this.SPEED_UP_FACTOR;
  }

  reset(game) {
    alert(`${this.lives} lives remaining!`);
    this.position.x = this.initX;
    this.position.y = this.initY;
    this.velocity.x = 0;
    game.entities[1][0].reset();
  }
}
