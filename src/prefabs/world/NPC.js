import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';
import Player from './Player'

export default class NPC extends Prefab {
  constructor (scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.Message_box_position = {x: this.x - 300, y: this.y + 90};

    this.scene.physics.add.collider(this, this.scene.groups.players, this.talk, null, this);

  }

  addMessage () {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newContent = document.createTextNode(this.name + ": " + this.message);

    let gameContainer = document.querySelector('#game-container');
    newDiv.setAttribute("id", "messagebox");
    newDiv.setAttribute("class", "message_white");
    newDiv.appendChild(newP);
    newP.appendChild(newContent)
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

