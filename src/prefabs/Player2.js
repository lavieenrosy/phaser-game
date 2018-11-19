import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, sheet, position, scale) {
    super(scene, x, y, sheet, position);
    this.scene = scene;
    // this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.setScale(scale);
  }
}