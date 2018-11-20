import JSONLevelScene from './JSONLevelScene';
// import Prefab from '../prefabs/Prefab.js';
// import TextPrefab from '../prefabs/TextPrefab.js';
import Player2 from '../prefabs/Player2.js';
import Typewriter from '../prefabs/HUD/Typewriter.js'

class MayorScene extends Phaser.Scene {

  constructor() {
    super('MayorScene');
  }

  preload() {
    this.load.spritesheet('characters', 'assets/images/world/modern5.png', { frameWidth: 46, frameHeight: 64 });

  }

  create() {
    let player1 = new Player2(this, 180, 150, 'characters', 31, 2);
    let player2 = new Player2(this, 500, 150, 'characters', 64, 2);

  }

  update() {
    let enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (enterKey.isDown) {
      const typewriter = new Typewriter();
      console.log(typewriter);
      typewriter.init(this.scene, {
        x: 290,
        y: 40,
        fontFamily: "chillerBlack",
        fontSize: 26,
        maxWidth: 300,
        text: "Some text to be typed!"
      });

      // this.start_game();
    };
  }



  start_game() {
      this.scene.start('BootScene', {scene: 'level1'});
  }
}

export default MayorScene;