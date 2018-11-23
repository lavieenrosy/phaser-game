class BootScene extends Phaser.Scene {
  constructor() {
    super({key: 'BootScene'});
    this.levels = {
      title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'},
      level1: {key: 'WorldScene', path: 'assets/levels/level1.json'},
      level2: {key: 'WorldScene', path: 'assets/levels/level2.json'},
      level3: {key: 'WorldScene', path: 'assets/levels/level3.json'},
      level4: {key: 'Level4Scene', path: 'assets/levels/level4.json'},
      mayor: {key: 'MayorScene', path: 'assets/levels/mayor.json'},
      // game-over: {key: 'GameOverScene', path: 'assets/levels/game_over.json'},
      townhall: {key: 'TownhallScene', path: 'assets/levels/townhall.json'}
    };
  }

  init(data) {
    if (data.level) {
      this.next_level = data.level
    }
  }

  preload () {
      for (let level_name in this.levels) {
          let level = this.levels[level_name];
          this.load.json(level_name, level.path);

      }
  }

  create (data) {
      let level_data;
      if (data.next_level) {
        level_data = this.cache.json.get(data.level);
      } else {
        level_data = this.cache.json.get(data.scene);
      }
      this.scene.start('LoadingScene', {level_data: level_data, scene: this.levels[data.scene].key, next_level: this.next_level});
  }
}

export default BootScene;