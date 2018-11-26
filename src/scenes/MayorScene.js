import StaticPlayer from '../prefabs/StaticPlayer.js';

class MayorScene extends Phaser.Scene {

  constructor() {
    super('MayorScene');
  }

  init(data) {
    if (data.next_level) {
      this.next_level = data.next_level;
    }
  }

  preload() {
    this.load.spritesheet('character', 'assets/images/world/chara5.png', { frameWidth: 26, frameHeight: 36 });
  }

  create() {

    const message = {
      level1: `Congrats on your win at the polls, Charlie! Now that you’re mayor, it’s time to fulfil on your mandate: to create jobs for Bajo Island.

In order to fulfil on your election promise, you must find those on Bajo who have vested interests in your platform. Gather their advice and when you are ready, return to Townhall where you will make your decision.

Speaking as the previous mayor, let me give you one valuable piece of advice: choose carefully, because the decisions you make for Bajo will have far reaching consequences…`}

    let mainChar1 = new StaticPlayer(this, 180, 100, 'character', 31, 3);
    let senior = new StaticPlayer(this, 500, 100, 'character', 64, 3);

    this.addMessage(message.level1);

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