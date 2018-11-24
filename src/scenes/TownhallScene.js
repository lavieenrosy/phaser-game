import WorldScene from './WorldScene';

class TownhallScene extends WorldScene {
  constructor() {
    super('TownhallScene');
    this.money = 1000000;
    this.popularity = 50;
  }

  create(data) {
    super.create();
    this.data = data;

    this.optionA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.optionB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    this.optionC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

    this.setScene(data.next_level);
  }

  update() {

    super.update();

    let messageBox = document.querySelector('#messagebox')
    if (messageBox) {
      if (this.optionA.isDown) {
        messageBox.remove();
        this.choice = 'A';
        this.calculatePoints(this.data.next_level);
        this.sendPoints();
        this.startScene(this.next_level);
      } else if (this.optionB.isDown) {
        messageBox.remove();
        this.choice = 'B';
        this.calculatePoints(this.data.next_level);
        this.sendPoints();
        this.startScene(this.next_level)
      } else if (this.optionC.isDown) {
        messageBox.remove();
        this.choice = 'C';
        this.calculatePoints(this.data.next_level);
        this.sendPoints();
        this.startScene(this.next_level)
      }
    }
  }

  setScene(currentLevel) {
    if (currentLevel === 'level2') {
      this.next_level = 'level3';
    } else if (currentLevel === 'level3') {
      this.next_level = 'level4';
    } else {
      this.next_level = 'level2';
    }
  }

  calculatePoints(currentLevel) {
    if (currentLevel === 'level2') {
      switch (this.choice) {
        case 'A':
          this.money += 125000;
          this.popularity -= 20;
          break;
        case 'B':
          this.money += 100000;
          this.popularity += 0;
          break;
        case 'C':
          this.money += 3000
          this.popularity += 25;
          break;
      }
    } else if (currentLevel === 'level3') {
      switch (this.choice) {
        case 'A':
          this.money += 125000;
          this.popularity -= 20;
          break;
        case 'B':
          this.money += 100000;
          this.popularity += 0;
          break;
        case 'C':
          this.money += 3000
          this.popularity += 25;
          break;
      }
    } else {
      switch (this.choice) {
        case 'A':
          this.money += 125000;
          this.popularity -= 20;
          break;
        case 'B':
          this.money += 100000;
          this.popularity += 0;
          break;
        case 'C':
          this.money += 3000
          this.popularity += 25;
          break;
      }
    }
  }

  sendPoints() {
    console.log("this.money: ", this.money);
    console.log("this.popularity: ", this.popularity);
  }

  startScene(level) {
    this.cameras.main.fade(700, 0, 0, 0);
    this.cameras.main.on('camerafadeoutcomplete', () => {
      if (this.data && this.data.next_level === 'level3') {
        this.scene.start('BootScene', {scene: 'level4', money: this.money, popularity: this.popularity})
      } else {
      this.scene.start('BootScene', {scene: 'mayor', level: level, money: this.money, popularity: this.popularity});
      }
      console.log('townhall level data:', level)
    });
  }

}

export default TownhallScene;