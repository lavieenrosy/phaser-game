class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'LoadingScene'
        });
    }

    init (data) {
        console.log("LoadingScene received data: ", data);
        this.level_data = data.level_data;

        let loading_message = this.add.text(320, 240, "Loading", {font: "48px Kells", fill:    "#ffffff"});
    }

    preload () {
        let assets = this.level_data.assets;
        for (let asset_key in assets) {
            let asset = assets[asset_key];
            console.log("asset.type: ", asset.type);
            console.log("asset_key: ", asset_key);
            switch (asset.type) {
                case "image":
                    this.load.image(asset_key, asset.source);
                    //i.e. asset_key is "background_image"
                    break;
                case "spritesheet":
                    this.load.spritesheet(asset_key, asset.source, {frameWidth: asset.frame_width, frameHeight: asset.frame_height, frames: asset.frames, margin: asset.margin, spacing: asset.spacing});
                    break;
                case "tilemap":
                    this.load.tilemapTiledJSON(asset_key, asset.source);
                    break;
            }
        }
    }

    create (data) {
        //Here, data is the same data piping in from BootScene
        this.scene.start(data.scene, {level_data: this.level_data});
        //this.scene.start(TitleScene, {level_data: {assets: {...}, groups: [...], prefabs: {...}})
    }
}

export default LoadingScene;