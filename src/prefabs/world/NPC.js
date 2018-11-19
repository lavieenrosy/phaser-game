import Prefab from '../Prefab';

export default class NPC extends Prefab {
  constructor (scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players, this.talk, null, this);
  }

  talk(npc, player) {
    player.stop();
    console.log(this.message)
  }
}