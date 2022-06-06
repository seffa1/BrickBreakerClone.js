// This class is here to enforce the update and draw arguments and id

export default class Entity {
  constructor(game, id) {
    if (game === undefined || id === undefined) {
      throw new Error("Entity needs game or ID arguments!");
    }
    this.id = id;
    this.GAME_WIDTH = game.GAME_WIDTH;
    this.GAME_HEIGHT = game.GAME_HEIGHT;
  }
  update(deltaTime, game) {}
  draw(context) {}
}
