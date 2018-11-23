class GameOverScene extends Phaser.Scene {

  constructor() {
    super('GameOverScene');
  }

  preload() {
    this.load.image('game_over', 'assets/images/game-over/BajoIsland.png')
  }

  create() {
    let image = this.add.image(340, 200, 'game_over');
  }


}

export default GameOverScene;