import WorldScene from './WorldScene';


class TownhallScene extends WorldScene {
  constructor() {
    super('TownhallScene');

    // this.prefab_classes = {
    //   player: Player.prototype.constructor,
    //   npc: NPC.prototype.constructor,
    //   door: Door.prototype.constructor
    // }

    this.next_scene = '';

  }

  update() {
    let optionA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    let optionB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    let optionC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    let optionD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    let optionE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

    if (optionA.isDown) {
      this.next_scene = 'level2'
      this.next_level()
    } else if (optionB.isDown) {
      this.next_scene = 'level2'
      this.next_level()
    } else if (optionC.isDown) {
      this.next_scene = 'level2'
      this.next_level()
    } else if (optionD.isDown) {
      this.next_scene = 'level2'
      this.next_level()
    } else if (optionE.isDown) {
      this.next_scene = 'level2'
      this.next_level()
    }

  }

  next_level() {
    this.scene.start('BootScene', {scene: this.next_scene});
  }

}

export default TownhallScene;