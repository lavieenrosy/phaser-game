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

//toggle for login and reg form

document.querySelector('.navbar__reg-btn').addEventListener('click', (event) => {
    const dropDown = document.querySelector('.reg-box')
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
});

document.querySelector('.navbar__login-btn').addEventListener('click', (event) => {
    const dropDown = document.querySelector('.login-box')
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
});

//this is the code from Tweeter

  // $('.compose').on('click', function (event) {
  //   $('.new-tweet').slideToggle("400", function() {
  //     $('.new-tweet textarea').focus();
  //   });
  // });


