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

    if (this.optionA.isDown) {
      this.next_level('level1');
    } else if (this.optionB.isDown) {
      this.next_level('townhall')
    } else if (this.optionC.isDown) {
      this.next_level('title')
    } else if (this.optionD.isDown) {
      this.next_level('mayor')
    }
    
  }
  next_level(level) {
    this.scene.start('BootScene', {scene: level});
  }
}

export default TownhallScene;