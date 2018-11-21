import JSONLevelScene from './JSONLevelScene';
import StaticPlayer from '../prefabs/StaticPlayer.js';
import Typewriter from '../prefabs/HUD/Typewriter.js'

class MayorScene extends Phaser.Scene {

  constructor() {
    super('MayorScene');
  }

  preload() {
    this.load.spritesheet('characters', 'assets/images/world/modern5.png', { frameWidth: 46, frameHeight: 64 });
  }

  create() {
    let player1 = new StaticPlayer(this, 180, 100, 'characters', 31, 2);
    let player2 = new StaticPlayer(this, 500, 100, 'characters', 64, 2);
    this.addMessage("hey");

  }

  addMessage (message) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newContent = document.createTextNode(message);
    let gameContainer = document.querySelector('#game-container');
    newDiv.setAttribute("id", "messagebox");
    newDiv.setAttribute("class", "message_black");
    newDiv.appendChild(newP);
    newP.appendChild(newContent)
    gameContainer.appendChild(newDiv);
  }

  update() {
    let enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (enterKey.isDown) {
      // const typewriter = new Typewriter();
      // console.log(typewriter);
      // typewriter.init(this.scene, {
      //   x: 290,
      //   y: 40,
      //   fontFamily: "chillerBlack",
      //   fontSize: 26,
      //   maxWidth: 300,
      //   text: "Some text to be typed!"
      // });

      this.start_game();

    };


  }



  start_game() {
      this.scene.start('BootScene', {scene: 'level1'});
  }
}

export default MayorScene;