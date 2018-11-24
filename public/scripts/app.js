$(() => {
  console.log("we are in document ready")
  loadScores();

  function createScoreTableRows(score) {
    
    const vname = score.name;
    const vscore = score.score;
    const vrow = $('<tr>');
    const nameData = $('<td>').addClass('scores__td').text(vname);
    const scoreData = $('<td>').addClass('scores__td').text(vscore);
    
    let scoreRow = vrow.append(nameData).append(scoreData);
    console.log('score row', scoreRow)

    return scoreRow;
  }

  //iterate through the score data 
  function renderScores(scores){
    for(let i = 0; i <= scores.length; i ++){
      $('#scores').prepend(createScoreTableRows(scores[i]))
    }
  }

  // load scores from the server 
  function loadScores(){
    // $.ajax('https://bajo-island-api.herokuapp.com/api/users/scores', {method: 'GET'})
    //   .then(function(score){
    //     $('#scores').empty();
    //     renderScores(score);
    //   });
    // }

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
  }
 
});

