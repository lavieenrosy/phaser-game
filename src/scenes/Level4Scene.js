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
    }

  }
  next_level() {
    this.scene.start('BootScene', {scene: 'gameover'});
  }
}

export default Level4Scene;