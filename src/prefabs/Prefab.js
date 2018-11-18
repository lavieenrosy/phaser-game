class Prefab extends Phaser.GameObjects.Sprite {
  constructor(scene, name, position, properties) {
    super(scene, position.x, position.y, properties.texture, properties.frame);

    this.scene = scene;
    this.name = name;
    // adds *this* prefab to the existing scene
    this.scene.add.existing(this);
    // add *this* prefab to its group
    this.scene.groups[properties.group].add(this);

    if (properties.scale) {
        this.setScale(properties.scale.x, properties.scale.y);
    }

    if (properties.anchor) {
        this.setOrigin(properties.anchor.x, properties.anchor.y);
    }

    // save it in the prefabs list of the scene object
    this.scene.prefabs[name] = this;
    }
}

export default Prefab;