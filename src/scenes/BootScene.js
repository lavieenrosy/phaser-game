class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene'
        });

        this.levels = {
            title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'},
            level1: {key: 'L1Scene', path: 'assets/levels/level1.json'},
            mayor: {key: 'MayorScene', path: 'assets/levels/mayor.json'}
        };
    }

    preload () {
        for (let level_name in this.levels) {
            let level = this.levels[level_name];
            this.load.json(level_name, level.path);
            //level_name = "title" and "level1"
        }
    }

    create (data) {
        let level_data = this.cache.json.get(data.scene);
        //data.scene is "title" and "level1"
        //send 2 parameters to Loading Scene. The first is the level_data, the second is the name of the scene i.e. "scene: TitleScene"
        this.scene.start('LoadingScene', {level_data: level_data, scene: this.levels[data.scene].key});
    }
}

export default BootScene;