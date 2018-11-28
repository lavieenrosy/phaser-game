import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';
import Player from './Player'

export default class NPC extends Prefab {
  constructor (scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    if (this.scene.sys.config.key === 'TownhallScene' && this.name === 'mayor') {
      switch (this.scene.sys.game.playerStats.level) {
        case 'level2':
          this.message = this.scene.cache.text.get('senior_message_2');
          break;
        case 'level3':
          this.message = this.scene.cache.text.get('senior_message_3');
          break;
      }
    }

    this.body.immovable = true;

    this.Message_box_position = {x: this.x - 300, y: this.y + 90};

    this.scene.physics.add.collider(this, this.scene.groups.players, this.talk, null, this);

  }

  addMessage () {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newFooter = document.createElement("footer");
    let newContent = document.createTextNode(this.message);
    let newFooterContent = document.createTextNode("press enter to continue")

    let gameContainer = document.querySelector('#game-container');
    
    newDiv.setAttribute("id", "messagebox");
    newDiv.setAttribute("class", "game__message_white");
    newFooter.setAttribute("class", "game__footer");
    newP.setAttribute("class", "game__p");
    newDiv.appendChild(newP);
    newP.appendChild(newContent)
    newDiv.appendChild(newFooter);
    newFooter.appendChild(newFooterContent);
    gameContainer.appendChild(newDiv);
  }

  //method for interacting with npcs
  talk(npc, player) {
    player.stop();
    let msgbox = document.querySelector('#messagebox')

    if(!msgbox){
    //create a new message box and pass the npc message property as the text

      this.addMessage();
    }
  }
}

