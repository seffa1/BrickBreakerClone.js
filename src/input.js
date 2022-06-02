export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.velocity = -5; // move left
          break;
        case 39:
          paddle.velocity = 5; // move right
          break;
      }
    });
  }
}
