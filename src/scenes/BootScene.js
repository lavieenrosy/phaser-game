class BootScene extends Phaser.Scene {
    constructor() {
        super({key: 'BootScene'});
        this.levels = {
            title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'},
            level1: {key: 'WorldScene', path: 'assets/levels/level1.json'},
            mayor: {key: 'MayorScene', path: 'assets/levels/mayor.json'},
            townhall: {key: 'TownhallScene', path: 'assets/levels/townhall.json'}
        };
    }
    
    preload () {
        for (let level_name in this.levels) {
            let level = this.levels[level_name];
            this.load.json(level_name, level.path);
        }
    }
    
    create (data) {
        let level_data = this.cache.json.get(data.scene);
        this.scene.start('LoadingScene', {level_data: level_data, scene: this.levels[data.scene].key});
    }
}

export default BootScene;