const openWeatherKey = 'f5370addfb57fae9c0c90650140cc73e';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
const $submit = $('#search');
const $input = $('#city');
const $weather = $('.weather');
const $restart = $('#restart');

 const getData = async() => {
    
    const urlToFetch = weatherUrl + '?&q=' + $input.val() + '&APPID=' + openWeatherKey;
    
    try {
        const response = await fetch(urlToFetch);

        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return(jsonResponse);
        }
        
    } catch(error) {
        console.log(error);
    }
};

const renderForecast = (obj) => {

    $weather.append(
    `<div>
    <h2>${obj.name}, ${obj.sys.country}</h2>
    <p>Weather: ${obj.weather[0].description} </p>
    <p>Temperature: ${obj.main.temp} degrees</p>
    <p>Humidity: ${obj.main.humidity}</p>
    <p>Wind speed: ${obj.wind.speed}</p>
    </div>`);
};

const restartSearch = () => {
    $weather.html('');
    $input.val('');
    $submit.show();
    $weather.hide();

};

const displaySuggestions = () => {
    $weather.show();    
    getData().then(data => renderForecast(data));
    $restart.show();
    $submit.hide();
    return false
};

$submit.submit(function (event) {
    event.preventDefault();
    displaySuggestions();
});

$restart.click(function() {
    $(this).hide();
    restartSearch();

});

window.addEventListener('load', function() {
    $weather.hide();
    $restart.hide();
});
