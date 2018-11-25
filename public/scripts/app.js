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
  // toggle for login and reg form

  $('.navbar__reg-btn').on('click', (event) => {
    $('.reg-box').slideToggle('300', () => {
      $('.player-name').focus();
    });
  });

  $('.navbar__login-btn').on('click', (event) => {
    $('.login-box').slideToggle('300', () => {
      $('.player-name').focus();
    });
  });

  // AJAX call for reg

  $('.reg-box form').on('submit', () => {
    event.preventDefault();
    const playerName = $('.player-name').val();
    const nameData = $('.player-name').serialize();

    $.ajax({
      url: 'https://bajo-island-api.herokuapp.com/api/register',
      method: 'POST',
      data: nameData,
      success: function(result) {
        console.log("data returning: ", result);
      },
      error: function(error) {
        console.log("error: ", error);
      }
    });
  });

});

