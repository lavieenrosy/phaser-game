class GameOverScene extends Phaser.Scene {

  constructor() {
    super('GameOverScene');
  }

  preload() {
    this.load.image('game_over', 'assets/images/game-over/BajoIsland.png')
  }

  create() {
    let image = this.add.image(340, 200, 'game_over');
    this.showGazette();
  }

  showGazette() {
    const gazette = document.querySelector('.results');
    gazette.style.display = "flex";
  }

}

export default GameOverScene;