import WorldScene from './WorldScene';

class Level4Scene extends WorldScene {
  constructor() {
    super('Level4Scene');
  }

  create(data) {
    super.create();
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {

    super.update();

    let messageBox = document.querySelector('#messagebox');
    if (messageBox && this.spaceBar.isDown) {
      messageBox.remove();
      this.next_level();
      this.sumbit_score();
    }

  }
  next_level() {
    this.scene.start('BootScene', {scene: 'gameover'});
  }

  sumbit_score() {
    $.ajax({
      url: 'https://bajo-island-api.herokuapp.com/api/register',
      method: 'POST',
      data: {name: this.sys.game.playerStats.name, score: this.sys.game.playerStats.score},
        success: (result) => {
          console.log("name: ", result);
          this.loadScores();
        },
        error: (error) => {
          console.log("error: ", error);
        }
    });
  }

  loadScores(){
    $.get('https://bajo-island-api.herokuapp.com/api/users/scores', (scores) => {
      $('#scores').empty();
      scores.forEach((score) => {
        $('#scores').append(this.createScoreTableRows(score));
      });
    });
  }

  createScoreTableRows(score) {

    const vname = score.name;
    const vscore = score.scores;
    const vrow = $('<tr>');
    const nameData = $('<td>').addClass('scores__td').text(vname);
    const scoreData = $('<td>').addClass('scores__td').text(vscore);

    let scoreRow = vrow.append(nameData).append(scoreData);

    return scoreRow;
  }
}

export default Level4Scene;