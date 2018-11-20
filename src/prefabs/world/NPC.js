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

  //method for interacting with npcs
  talk(npc, player) {
    player.stop();
    console.log(this.message);
    //create a new message box and pass the npc message property as the text
    if (!(this.scene.current_message_box)){
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.Message_box_position, {texture: 'message_box_image', group: 'hud', message: this.message});

      console.log('this2', this.scene.current_message_box)
    }
  }
}