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
      messageBox.style.height = '230px';
      // let newFooterContent = document.createTextNode("press | A | or | B | or | C | keys for options")
      if (this.optionA.isDown) {
        messageBox.remove();
        this.choice = 'A';
        this.calculatePoints(this.data.next_level);
        this.updatePoints();
        this.startScene(this.next_level);
      } else if (this.optionB.isDown) {
        messageBox.remove();
        this.choice = 'B';
        this.calculatePoints(this.data.next_level);
        this.updatePoints();
        this.startScene(this.next_level)
      } else if (this.optionC.isDown) {
        messageBox.remove();
        this.choice = 'C';
        this.calculatePoints(this.data.next_level);
        this.updatePoints();
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
        // bridge
          this.money += 30000;
          this.popularity += 10;
          break;
        case 'B':
        // bike
          this.money += 35000;
          this.popularity += 20;
          break;
        case 'C':
        // road
          this.money += 65000
          this.popularity += 40;
          break;
      }
    } else if (currentLevel === 'level3') {
      switch (this.choice) {
        case 'A':
        // island expantion
          this.money -= 90000;
          this.popularity -= 30;
          break;
        case 'B':
        // carbon tax
          this.money -= 750;
          this.popularity -= 20;
          break;
        case 'C':
        // trees
          this.money -= 2000
          this.popularity += 60;
          break;
      }
    } else {
      switch (this.choice) {
        case 'A':
        // factory
          this.money += 125000;
          this.popularity -= 20;
          break;
        case 'B':
        // cows
          this.money += 100000;
          this.popularity += 0;
          break;
        case 'C':
        // vegetables
          this.money += 12500
          this.popularity += 25;
          break;
      }
    }
  }

  updatePoints() {
    let currentStats = this.sys.game.playerStats;
    currentStats.money = this.money;
    currentStats.popularity = this.popularity;
    currentStats.score = Math.floor(currentStats.money / 60000 + currentStats.popularity * 1000);
    currentStats.level = this.next_level;
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