import Prefab from '../Prefab';

class Door extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.next_level = properties.next_level; 
    this.body.immovable = true; 

    this.scene.physics.add.collider(this, this.scene.groups.players, this.enter, null, this);

  }

  enter() {
    if (this.scene.sys.config.key === 'TownhallScene') {
      switch (this.scene.next_level) {
        case 'level2':
          this.next_level = 'level1';
          break;
        case 'level3':
          this.next_level = 'level2';
          break;
        case 'level4':
          this.next_level = 'level3';
          break;
      }
    }
    this.scene.scene.start('BootScene', {scene: this.next_level}); 
  }
}

export default Door;