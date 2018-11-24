$(() => {
  function createScoreTableRows(score) {
    
    const name = score.name;
    const score = score.score;
    const row = $('<tr>');
    const nameData = $('<td>').addClass('scores__td').text(name);
    const scoreData = $('<td>').addClass('scores__td').text(score);
    
    let scoreRow = row.append(nameData).append(scoreData);
    console.log('score row', scoreRow)

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
      .then(function(score){
        $('#scores').empty();
        renderScores(score);
      });
    }
  
    loadScores();

});

