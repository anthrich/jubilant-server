import GameObject from "./game-object";
import IDrawableFactory from "./drawable-factory";
import Vector2 from "./vector2";
abstract class GameState {

  gameObjects: Array<GameObject>;

  protected drawableFactory : IDrawableFactory;

  constructor() {
    this.gameObjects = [];
  }

  setDrawableFactory(drawableFactory: IDrawableFactory) {
    this.drawableFactory = drawableFactory;
  }

  update(delta: number) {
    this.gameObjects.forEach((go) => {
      go.update(delta);
    });
  }

  draw() {
    this.gameObjects.sort((a, b) => a.position.y - b.position.y);
    this.gameObjects.forEach((go) => {
      go.draw();
    });
  }

  abstract onGameStateReady();
  abstract onMouseDown(x: number, y: number);
  abstract onKeyUp(e : KeyboardEvent);
  abstract onKeyDown(e : KeyboardEvent);
}

export default GameState;
