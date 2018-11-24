$() => {

  function createScoreTable(data) {
    const name = data.[index].name;
    const score = data.[index].score;

    const article = $('<article>').addClass('scores__container');
    const title = $('<h2>').text("HIGH SCORES");
    const table = $('<table>').addClass('.scores__table');
    const nameColumn = $('<th>').text("NAME");
    const scoreColumn = $('<th>').text("SCORE");
    const nameData = $('<td>').addClass('.scores__td').text(name);
    const scoreData = $('<td>').addClass('.scores__td').text(score);
  }

  
  function loadScoreTable(){
    $.ajax('https://bajo-island-api.herokuapp.com/api/users/scores').then((response) => {
      renderScoreTable(response.data)
    })
  }
}







/* <section id="scores" class="scores"> // append to here. this section should stay on the page
<article id="scores__container" class="scores__container">
    <h2>High Scores</h2>
  <table class="scores__table">
    <tr>
      <th>SCORE</th>
      <th>NAME</th>
    </tr> 
    <tr>
      <td class ="scores__td">2150</td>
      <td class ="scores__td">BASSEM</td>
    </tr> 
    <tr>
      <td class ="scores__td">2050</td>
      <td class ="scores__td">ANDREA</td>
    </tr>
    <tr>
      <td class ="scores__td">1800</td>
      <td class ="scores__td">ROSY</td>
    </tr>
  </table>
</article>
</section> */