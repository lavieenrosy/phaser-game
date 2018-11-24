$(() => {
  function createScoreTableRows(scoreInfo) {
    
    const name = scoreInfo.name;
    const score = scoreInfo.score;
    const row = $('<tr>');
    const nameData = $('<td>').addClass('scores__td').text(name);
    const scoreData = $('<td>').addClass('scores__td').text(score);
    
    let scoreRow = row.append(nameData).append(scoreData);
    return scoreRow;
  }

  //iterate throught the score data 
  function renderScores(scores){
    for(let i = 0; i <= scores.length; i ++){
      $('#scores').prepend(createScoreTableRows(scores[i]))
    }
  }

  // load scores from the server
  function loadScores(){
    $.ajax('https://bajo-island-api.herokuapp.com/api/users/scores', {method: 'GET'})
      .then(function(data){
        $('#scores').empty();
        renderScores(data);
      });
    }
  
    loadScores();

});

/*     
<table id="scores" class="scores__table">
          <tr>
            <td class="scores__td">2150</td>
            <td class="scores__td">BASSEM</td>
          </tr> 
          <tr>
            <td class="scores__td">2050</td>
            <td class="scores__td">ANDREA</td>
          </tr>
          <tr>
            <td class="scores__td">1800</td>
            <td class="scores__td">ROSY</td>
          </tr>
          <tr>
              <td class="scores__td">1750</td>
              <td class="scores__td">ANDREA</td>
            </tr>
        </table>
*/