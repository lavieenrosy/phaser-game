import WorldScene from './WorldScene';

class Level4Scene extends WorldScene {
  constructor() {
    super('Level4Scene');
  }

  create(data) {
    super.create();
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {

    super.update();

    let messageBox = document.querySelector('#messagebox');
    if (messageBox && this.spaceBar.isDown) {
      messageBox.remove();
      this.next_level();
      this.sumbit_score();
    }

  }
  next_level() {
    this.scene.start('BootScene', {scene: 'gameover'});
  }

  sumbit_score() {
    $.ajax({
      url: 'https://bajo-island-api.herokuapp.com/api/register',
      method: 'POST',
      data: {name: this.sys.game.playerStats.name, score: this.sys.game.playerStats.score},
        success: function(result) {
          console.log("name: ", result);
        },
        error: function(error) {
          console.log("error: ", error);
        }
    });
  }
}

export default Level4Scene;