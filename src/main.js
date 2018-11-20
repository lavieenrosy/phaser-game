import TitleScene from './scenes/TitleScene';
import WorldScene from './scenes/WorldScene';
import MayorScene from './scenes/MayorScene';
import TownhallScene from './scenes/TownhallScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let worldScene = new WorldScene();
let townhallScene = new TownhallScene();
let mayorScene = new MayorScene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();

let config = {
    type: Phaser.AUTO,
    width: 680,
    height: 400,
    parent: 'game-container',
    zoom: 1.5,
    pixelArt: true,
    roundPixels: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    }
};

let game = new Phaser.Game(config);
game.scene.add('TitleScene', titleScene);
game.scene.add('WorldScene', worldScene);
game.scene.add('TownhallScene', townhallScene);
game.scene.add('MayorScene', mayorScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', {scene: 'title'});

