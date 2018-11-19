import TitleScene from './scenes/TitleScene';
import MayorScene from './scenes/MayorScene';
// import L1Scene from './scenes/L1Scene';
import WorldScene from './scenes/WorldScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let mayorScene = new MayorScene();
// let l1Scene = new L1Scene();
let worldScene = new WorldScene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();

let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 300,
    parent: 'game-container',
    zoom: 2,
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
game.scene.add('MayorScene', mayorScene);
// game.scene.add('L1Scene', l1Scene);
game.scene.add('WorldScene', worldScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', {scene: 'title'});
