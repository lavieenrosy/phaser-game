import TitleScene from './scenes/TitleScene';
import WorldScene from './scenes/WorldScene';
import MayorScene from './scenes/MayorScene';
import TownhallScene from './scenes/TownhallScene';
import Level4Scene from './scenes/Level4Scene';
import GameOverScene from './scenes/GameOverScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let worldScene = new WorldScene();
let townhallScene = new TownhallScene();
let level4scene = new Level4Scene();
let gameoverscene = new GameOverScene();
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
game.scene.add('Level4Scene', level4scene);
game.scene.add('GameOverScene', gameoverscene);
game.scene.add('MayorScene', mayorScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', {scene: 'title'});
game.data = 'poop';
console.log('Game:', game);
game.playerStats = { level: 'level1', name: 'Rosy', money: 1000000, popularity: 50, score: 100 }


