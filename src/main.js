import TitleScene from './scenes/TitleScene';
import L1Scene from './scenes/L1Scene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let l1Scene = new L1Scene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360
};

let game = new Phaser.Game(config);
game.scene.add('TitleScene', titleScene);
game.scene.add('L1Scene', l1Scene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', {scene: 'title'});