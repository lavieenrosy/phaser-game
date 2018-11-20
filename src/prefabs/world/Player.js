import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walking_speed = +properties.walking_speed * 3;

    this.body.collideWorldBounds = true;

    this.scene.physics.add.collider(this, this.scene.layers.buildings);

    this.body.velocity.x = -this.walking_speed;

    this.move_left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.move_right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.move_up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.move_down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.enter_key = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    if (!this.scene.anims.anims.has('walking_down')) {
      this.scene.anims.create({
        key: 'walking_down',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [0, 4, 8, 12]}),
        frameRate: 6,
        repeat: -1
      });
    }

    if (!this.scene.anims.anims.has('walking_up')) {
      this.scene.anims.create({
        key: 'walking_up',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [1, 5, 9, 13]}),
        frameRate: 6,
        repeat: -1
      });
    }

    if (!this.scene.anims.anims.has('walking_left')) {
      this.scene.anims.create({
        key: 'walking_left',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [2, 6, 10, 14]}),
        frameRate: 6,
        repeat: -1
      });
    }

    if (!this.scene.anims.anims.has('walking_right')) {
      this.scene.anims.create({
        key: 'walking_right',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [3, 7, 11, 15]}),
        frameRate: 6,
        repeat: -1
      });
    }

    this.stopped_frames = [0, 1, 0, 2, 3];

    scene.cameras.main.startFollow(this, true);
    scene.cameras.main.setBounds(0, 0, 1920, 1920);
    scene.physics.world.setBounds(0, 0, 1920, 1920);
    scene.cameras.main.followOffset.set(1, 1);

  }

  update() {
    if (this.move_left.isDown && this.body.velocity.x <= 0) {
      this.body.velocity.x = -this.walking_speed;
      if (this.body.velocity.y === 0) {
        this.anims.play('walking_left', true)
      }
    } else if (this.move_right.isDown && this.body.velocity.x >= 0) {
      this.body.velocity.x = this.walking_speed;
      if (this.body.velocity.y === 0) {
        this.anims.play('walking_right', true)
      }
    } else {
      this.body.velocity.x = 0;
    }

    if (this.move_up.isDown && this.body.velocity.y <= 0) {
      this.body.velocity.y = -this.walking_speed;
      if (this.body.velocity.x === 0) {
        this.anims.play('walking_up', true)
      }
    } else if (this.move_down.isDown && this.body.velocity.y >= 0) {
      this.body.velocity.y = this.walking_speed;
      if (this.body.velocity.x === 0) {
        this.anims.play('walking_down', true)
      }
    } else {
      this.body.velocity.y = 0;
    }

    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      this.anims.stop();
      this.setFrame(this.stopped_frames[this.body.facing - 10]);
    }

    if(this.scene.current_message_box && this.enter_key.isDown) {
      this.scene.current_message_box.removeBox();
      this.scene.current_message_box.destroy();
      this.scene.current_message_box = null;
      console.log(this.scene);
    }

  }

  stop () {
    console.log("Stop bruh!")
  }
}

export default Player;