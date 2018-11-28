import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class TitleScene extends JSONLevelScene {
  constructor() {
    super('TitleScene');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  create() {
    super.create();
    this.renderInput();
  }

  update () {
    let enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (enterKey.isDown) {
      this.start_game();
    };

    // set player name in game object

    const name = $('.game__textarea').val();
    this.sys.game.playerStats.name = name.toUpperCase();
  }

  renderInput() {
    const textarea = $('<textarea>').addClass('game__textarea').attr("name", "name").attr('placeholder', 'ENTER PLAYER NAME').attr('maxlength', '3');
    const article = $('.game__name-input');
    article.append(textarea);
  }

  start_game() {
    this.scene.start('BootScene', {scene: 'mayor'});
  }
}

export default TitleScene;