$(() => {
  console.log("we are in document ready")

  function createScoreTableRows(score) {
    
    const vname = score.name;
    const vscore = score.score;
    const vrow = $('<tr>');
    const nameData = $('<td>').addClass('scores__td').text(vname);
    const scoreData = $('<td>').addClass('scores__td').text(vscore);
    
    let scoreRow = vrow.append(nameData).append(scoreData);

    return scoreRow;
  }

  //iterate through the score data 
  function renderScores(scores){
    scores.forEach(function (score) {
      $('#scores').append(createScoreTableRows(score));
    });
  }

    $.ajax({
      url: 'https://bajo-island-api.herokuapp.com/api/users/scores',
      method: 'GET',
      success: function(result){
        console.log("we are in success ",result);
      },
      error: function(error){
        console.log("we are in error",error);
      }
    });
 
  // load scores from the server 
  function loadScores(){
    $.get('https://bajo-island-api.herokuapp.com/api/users/scores', function(score) {
      $('#scores').empty();
      renderScores(score);
    });
  }

  loadScores();
  
});

