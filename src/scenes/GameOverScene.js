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
    this.renderReplay();

    // remove status bar

    let statusBar = document.querySelector('.game__status-bar');
    while (statusBar.firstChild) {
      statusBar.removeChild(statusBar.firstChild);
    }
  }

  showGazette() {
    const gazette = document.querySelector('.results');
    gazette.style.display = "flex";
  }

  renderReplay() {
    const button = $('<button>').addClass('game__replay');
    const link = $('<a>').attr('href', '/').text('REPLAY>');
    const article = $('.game__name-input');
    button.append(link)
    article.append(button);
  }

}

export default GameOverScene;