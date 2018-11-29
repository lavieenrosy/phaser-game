import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {

    super(scene, name, position, properties);
    
    this.walking_speed = +properties.walking_speed * 3;

    this.body.collideWorldBounds = true;
    
    this.scene.physics.add.collider(this, this.scene.layers.blocked);
    this.scene.physics.add.collider(this, this.scene.layers.water);
    this.scene.physics.add.collider(this, this.scene.layers.above_blocked);       
    this.scene.physics.add.collider(this, this.scene.layers.beneath_blocked);
    

    this.body.offset.x = 5;
    this.body.offset.y = 16;

    this.body.height = 16; 
    this.body.width = 16;

    this.body.velocity.x = -this.walking_speed;

    
    this.move_left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.move_right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.move_up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.move_down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.enter_key = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    

    if (!this.scene.anims.anims.has('walking_down')) {
      this.scene.anims.create({
        key: 'walking_down',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [0, 1, 2]}),
        frameRate: 6,
        repeat: -1
      });
    }

    if (!this.scene.anims.anims.has('walking_up')) {
      this.scene.anims.create({
        key: 'walking_up',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [36, 37, 38]}),
        frameRate: 6,
        repeat: -1
      });
    }

    if (!this.scene.anims.anims.has('walking_left')) {
      this.scene.anims.create({
        key: 'walking_left',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [12, 13, 14]}),
        frameRate: 6,
        repeat: -1
      });
    }

    if (!this.scene.anims.anims.has('walking_right')) {
      this.scene.anims.create({
        key: 'walking_right',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [24, 25, 26]}),
        frameRate: 6,
        repeat: -1
      });
    }

    this.stopped_frames = [1, 37, 1, 13, 25];

    scene.cameras.main.startFollow(this, true);
    scene.cameras.main.setBounds(0, 0, 1920, 1920);
    scene.physics.world.setBounds(0, 0, 1920, 1920);
    scene.cameras.main.followOffset.set(1, 1);

  }

  update() {
    if (this.body) {

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

      
      let messageBox = document.querySelector('#messagebox');

      if (messageBox) {
        this.anims.stop();
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.setFrame(this.stopped_frames[this.body.facing - 10])
      }
      
      if(messageBox && this.enter_key.isDown) {
        messageBox.remove();
      }
    }

  }

}

export default Player;