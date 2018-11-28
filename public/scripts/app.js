(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/en_US/all.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

window.fbAsyncInit = function() {
  FB.init({
    appId: '918996038489223',
    status: true,
    xfbml: true,
    cookie: true
  });
};


$(() => {
  console.log("we are in document ready")

  function createScoreTableRows(score) {

    const vname = score.name.toUpperCase();
    const vscore = score.scores;
    const vrow = $('<tr>');
    const nameData = $('<td>').addClass('scores__td').text(vname);
    const scoreData = $('<td>').addClass('scores__td').text(vscore);

    let scoreRow = vrow.append(nameData).append(scoreData);

    return scoreRow;
  }  

  function renderScores(score) {
    for(let i = 0; i < 7; i ++) {
      $('#scores').append(createScoreTableRows(score[i]));
    }
  }

    $.ajax({
      url: 'https://bajo-island-api.herokuapp.com/api/users/scores',
      method: 'GET',
      success: function(result){
        console.log("successful score GET");
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

  // --------------------- LOGIN & REG --------------------- //

  $('.navbar__reg-btn').on('click', (event) => {
    toggleForm('.reg-box', '.navbar__reg-name');
  });

  $('.navbar__login-btn').on('click', (event) => {
    toggleForm('.login-box', '.navbar__login-name');
  });

  $('.reg-box form').on('submit', () => {
    register();
  });

  $('.login-box form').on('submit', () => {
    login();
  });

  function toggleForm(box, focusField) {
    $(box).slideToggle('300', () => {
      $('.navbar__player-name').focus();
    });
  }

  function register() {
    event.preventDefault();
    const playerName = $('.navbar__reg-name').val();
    if (playerName === "") {
      $('.navbar__form-validation').text('Enter valid player name').slideDown("slow");
    } else {
      const nameData = $('.navbar__reg-name').serialize();
      $.ajax({
        url: 'https://bajo-island-api.herokuapp.com/api/register',
        method: 'POST',
        data: nameData,
        success: function(result) {
          console.log("name: ", result);
          toggleForm('.reg-box');
        },
        error: function(error) {
          console.log("error: ", error);
        }
      });
    }
  }

  function login() {
    event.preventDefault();
    const playerName = $('.navbar__login-name').val();
    if (playerName === "") {
      $('.navbar__form-validation').text('Enter valid player name').slideDown("slow");
    } else {
      const nameData = $('.navbar__login-name').serialize();
      $.ajax({
        url: 'https://bajo-island-api.herokuapp.com/api/register',
        method: 'GET',
        data: nameData,
        success: function(result) {
          console.log("name: ", result);
          toggleForm('.login-box');
        },
        error: function(error) {
          console.log("error: ", error);
        }
      });
    }
  }

  $('.fb-share').click(function() {
    FB.ui({
      method: 'feed',
      name: '',
      link: 'https://bajoisland.herokuapp.com/',
      picture: '',
      description: ''
    });
  });

});

