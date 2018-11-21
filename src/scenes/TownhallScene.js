import WorldScene from './WorldScene';

class TownhallScene extends WorldScene {
  constructor() {
    super('TownhallScene');
  }

  create() {
    super.create();
    this.optionA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.optionB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    this.optionC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    this.optionD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


  }
  update() {

    super.update();

    let messageBox = document.querySelector('#messagebox')
    if (messageBox) {
      if (this.optionA.isDown) {
        messageBox.remove();
        this.next_level('level1');
      } else if (this.optionB.isDown) {
        messageBox.remove();
        this.next_level('townhall')
      } else if (this.optionC.isDown) {
        messageBox.remove();
        this.next_level('title')
      } else if (this.optionD.isDown) {
        messageBox.remove();
        this.next_level('mayor')
      }
    }
    
  }
  next_level(level) {
    this.scene.start('BootScene', {scene: level});
  }
}

export default TownhallScene;