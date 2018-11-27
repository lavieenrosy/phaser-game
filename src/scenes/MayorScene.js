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
    let player = new StaticPlayer(this, 180, 90, 'player', 25, 3);
    let senior = new StaticPlayer(this, 500, 90, 'senior', 70, 3);

    this.addMessage(message[this.next_level]);

    if (this.next_level !== 'level1') {
      this.addYear();
    }

    // remove status bar from WorldScene

    let statusBar = document.querySelector('.game__status-bar');
    while (statusBar.firstChild) {
      statusBar.removeChild(statusBar.firstChild);
    }

    this.hideInput();
  }

  update() {
    const spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    if (spacebar.isDown) {
      this.start_game();
    };

    // remove elements from page on transition

    const messageBox = document.querySelector('#messagebox');
    const yearMsg = $('.game__years span')
    if (messageBox && spacebar.isDown) {
      messageBox.remove();
    }
    if (yearMsg && spacebar.isDown) {
      yearMsg.remove();
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

  addYear() {
    const yearMsg = $('<span>').text('25 years later...');
    const yearContainer = $('.game__years');
    yearContainer.append(yearMsg);
  }

  hideInput() {
    const input = document.querySelector('.game__name-input');
    input.style.display = "none";
  }

  start_game() {
    this.scene.start('BootScene', {scene: this.next_level ? this.next_level : 'level1'});
  }
}

export default MayorScene;