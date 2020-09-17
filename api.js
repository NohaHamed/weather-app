const openWeatherKey = '37472390ca691b1e306b6b08fa5fb10c';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=37472390ca691b1e306b6b08fa5fb10c';




function getData(city) {
  $.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=37472390ca691b1e306b6b08fa5fb10c`, function(data) {
    console.log(data);
      createHtml(data);
    });
}

function createHtml(obj) {
  
  $('.weather').append(

    `<h2>${obj.name}, ${obj.sys.country}</h2>
    <img src="https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png" alt="weather icon">
    <table>
      
        <tr>
          <th>Temp</th>
          <th>Humidity</th>
          <th>Wind</th>
        </tr>
      
      <tbody>
        <tr>
          <td>${Math.floor(obj.main.temp)} &#x2103</td>
          <td>${obj.main.humidity} %</td>
          <td>${obj.wind.speed} km/hr</td>
        </tr>
      </tbody>
    </table>`
    );
}

function restart() {
  $('#restart').on('click', function() {
    $(this).hide();
    $('.weather').html('');
    // $('.weather').hide();  
    $('#search input').val('');
    $('#search').show();
    $('.weather').hide();
  });
} 

$(document).ready(function(){
  $('#restart').hide();
  $('.weather').hide();
  $("#search").submit(function(event){
      event.preventDefault();
      $('.weather').show();

      let city = $('input').val();
      
      getData(city);
      $('#search').hide();
      $('#restart').show();
      

      restart();
  });
});
