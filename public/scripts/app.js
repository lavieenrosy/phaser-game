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
    toggleForm('.reg-box');
  });

  $('.navbar__login-btn').on('click', (event) => {
    toggleForm('.login-box');
  });

  $('.reg-box form').on('submit', () => {
    register();
  });

  function toggleForm(box) {
    $(box).slideToggle('300', () => {
      $('.navbar__player-name').focus();
    });
  }

  function register() {
    event.preventDefault();
    const playerName = $('.navbar__player-name').val();

    if (playerName === "") {
      $('.navbar__form-validation').text('Enter valid player name').slideDown("slow");
    }

    const nameData = $('.navbar__player-name').serialize();

    $.ajax({
      url: 'https://bajo-island-api.herokuapp.com/api/register',
      method: 'POST',
      data: nameData,
      success: function(result) {
        console.log("data returning: ", result);
        toggleForm('.reg-box');
      },
      error: function(error) {
        console.log("error: ", error);
      }
    });
  }

});

