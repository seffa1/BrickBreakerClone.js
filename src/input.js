export default class InputHandler {
  constructor(paddle) {
    // pressing a key
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.velocity = -0.5; // move left
          break;
        case 39:
          paddle.velocity = 0.5; // move right
          break;
      }
    });
    // releaseing a key
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.velocity = 0; // move left
          break;
        case 39:
          paddle.velocity = 0; // move right
          break;
      }
    });
  }
}
