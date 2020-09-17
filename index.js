const openWeatherKey = '37472390ca691b1e306b6b08fa5fb10c';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=37472390ca691b1e306b6b08fa5fb10c';



var weather =  {
  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }
  ],
  wind: {
    deg: 170,
    speed: 1.5
  }

}

function getWeather(city) {
  if (((weather.name.toLowerCase()).split(' ')).includes(city)) {
    $('#search').hide();
    $('.weather').show();
    $('.weather').append(
      `<h2>${weather.name}</h2>
      <p>Temperature: ${weather.main.temp} degrees</p>
      <p>Humidity: ${weather.main.humidity}</p>
      <p>Wind speed: ${weather.wind.speed}</p>`
      );
    $('#restart').show();

   restart();
  }
}

function restart() {
  $('#restart').on('click', function() {
    $(this).hide();
    $('.weather').children().remove();
    $('.weather').hide();  
    $('#search').show();
   
  });
}

$(document).ready(function() {

  $('#restart').hide();
  $('.weather').hide();

  $('button[type=submit]').on('click', function(event) {
    event.preventDefault();
    var city = $('input[name=search-term]').val().toLowerCase();
    getWeather(city);
  });

});



