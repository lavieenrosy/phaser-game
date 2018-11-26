import StaticPlayer from '../prefabs/StaticPlayer.js';
import { message } from './MayorMessages.js'

class MayorScene extends Phaser.Scene {

  constructor() {
    super('MayorScene');
  }

  init(data) {
    if (data.next_level) {
      this.next_level = data.next_level;
    } else {
      this.next_level = 'level1';
    }
  }

  preload() {
    this.load.spritesheet('senior', 'assets/images/world/military2.png', { frameWidth: 26, frameHeight: 36 });
    this.load.spritesheet('player', 'assets/images/world/player.png', { frameWidth: 26, frameHeight: 36 });
  }

  create() {

    let player = new StaticPlayer(this, 180, 100, 'player', 25, 3);
    let senior = new StaticPlayer(this, 500, 100, 'senior', 70, 3);

    this.addMessage(message[this.next_level]);

    // remove status bar

    let statusBar = document.querySelector('.game__status-bar');
    while (statusBar.firstChild) {
      statusBar.removeChild(statusBar.firstChild);
    }

  }

  addMessage (message) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newContent = document.createTextNode(message);
    let gameContainer = document.querySelector('#game-container');
    newDiv.setAttribute("id", "messagebox");
    newDiv.setAttribute("class", "game__message_black");
    newDiv.appendChild(newP);
    newP.appendChild(newContent)
    gameContainer.appendChild(newDiv);
  }

  update() {
    let enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (enterKey.isDown) {
      this.start_game();
    };

    let messageBox = document.querySelector('#messagebox');
    this.enter_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    if(messageBox && this.enter_key.isDown) {
      messageBox.remove();
    }
  }

  start_game() {
    this.scene.start('BootScene', {scene: this.next_level ? this.next_level : 'level1'});
  }
}

export default MayorScene;