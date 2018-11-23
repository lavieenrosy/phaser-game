import WorldScene from './WorldScene';

class Level4Scene extends WorldScene {
  constructor() {
    super('Level4Scene');
  }

  create(data) {
    super.create();
    this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update() {

    super.update();

    let messageBox = document.querySelector('#messagebox');
    if (messageBox) {
      if (this.aKey.isDown) {
        this.next_level();
      }
    }

  }
  next_level() {
    this.scene.start('BootScene', {scene: 'gameover'});
  }
}

export default Level4Scene;