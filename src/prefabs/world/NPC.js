import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';
import Player from './Player'

export default class NPC extends Prefab {
  constructor (scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    console.log(this.x, this.y);
    this.body.immovable = true;

    this.Message_box_position = {x: this.x - 300, y: this.y + 90};

    this.scene.physics.add.collider(this, this.scene.groups.players, this.talk, null, this);

  }

  addMessage (message) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newContent = document.createTextNode(message);
    newDiv.setAttribute("id", "messagebox");
    newDiv.appendChild(newP);
    newP.appendChild(newContent)
    document.body.appendChild(newDiv);
  }

  //method for interacting with npcs
  talk(npc, player) {
    player.stop();
    let msgbox = document.querySelector('#messagebox')

    if(!msgbox){
    //create a new message box and pass the npc message property as the text
      this.addMessage(this.message);
    }
  }
}

