import WorldScene from './WorldScene';

class TownhallScene extends WorldScene {
  constructor() {
    super('TownhallScene');
  }

  create(data) {
    super.create();
    this.data = data;

    this.optionA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.optionB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    this.optionC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    this.optionD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    if (data.next_level === 'level2') {
      this.chosen_scene = 'level3';
    } else if (data.next_level === 'level3') {
      this.chosen_scene = 'level4';
    } else {
      this.chosen_scene = 'level2'
    }

  }
  update() {

    super.update();

    let messageBox = document.querySelector('#messagebox')
    if (messageBox) {
      if (this.optionA.isDown) {
        messageBox.remove();
        this.next_level(this.chosen_scene);
      } else if (this.optionB.isDown) {
        messageBox.remove();
        this.next_level(this.chosen_scene)
      } else if (this.optionC.isDown) {
        messageBox.remove();
        this.next_level(this.chosen_scene)
      } else if (this.optionD.isDown) {
        messageBox.remove();
        this.next_level(this.chosen_scene)
      }
    }

  }
  next_level(level) {
    if (this.data && this.data.next_level === 'level3') {
      this.scene.start('BootScene', {scene: 'level4'})
    } else {
    this.scene.start('BootScene', {scene: 'mayor', level: level});
    }
  }
}

export default TownhallScene;