/*
Project Algorithm:
1. Think about your project
	- OpenWeatherMap API
  - Display: current temp, high & low, city name, rain, description, weather icon
2. Think about your needs - jQuery, Weather API
3. Plan the layout - wireframes
4. Create file structure - .html, .js, .css, libraries & frameworks
5. Code the layout (in HTML), include containers!
6. Plan the JavaScript - approach & functions
7. Execute JS
8. Make it pretty - fonts, colors, pictures, etc.

JS Algorithm:
1. check if js is linked
2. create logic
  a. get input
    - triggered on 
      - button click:
         a. target button
         b. add event listener
         c. add action(s)
      -enter keypress:
        a. target input element
        b. add event listener
        c. check if key pressed was 'enter' key
        d. add action(s)
    - get input:
      a. target input box
      b. get input (.val())
  b. use their input to get weather data using AJAX
  c. display data / error message
*/

$('#search-btn').on('click', () => {  
  displayWeatherData();
});

$('#city').keypress(e => {
  if (e.key === 'Enter') displayWeatherData();
});

function displayWeatherData() {
  let city = $('#city').val();
    
  $('#city').val('');
  
  // if (city === false) alert('Please enter a destination.');  
  if (!city) alert('Please enter a destination.');
  
  // let url = 'http://api.openweathermap.org/data/2.5/weather?appid=e42d32af9555a899db7106b67e9e5aae&units=metric&q=' + city;
  let url = 'http://api.openweathermap.org/data/2.5/weather?appid=e42d32af9555a899db7106b67e9e5aae&units=imperial&q=' + city;
  
  $.getJSON(url, data => {
    console.log(data);
    
    let currentTemp = data.main.temp;
    let high = data.main.temp_max;
    let low = data.main.temp_min;
    let cityName = data.name;
    let desc = data.weather[0].description;
    let rain = data.rain ? data.rain['3h'] : 'none';
    
    // temp container stuff
    displayTempContainer(currentTemp, high, low);
    
    // city container stuff
    displayCityContainer(cityName, desc);
    
    // info container stuff
    displayInfoContainer(desc, rain);
    
    $('#input-area').css('top', 0);
    
  });
  
}

function displayTempContainer(currentTemp, high, low) {
  
  let tempContainer = `
  <h3>Current Temp: ${currentTemp}</h3>
  <h3>High: ${high}</h3>
  <h3>Low: ${low}</h3>
  `;
  
  $('#temp-container').html(tempContainer);
  
}

function displayCityContainer(cityName, desc) {
  
  // check description to see if it contains 'clear', 'cloud', 'rain'
  let icon;
  if (desc.includes('cloud'))  {
    icon = 'clouds';
  } else if (desc.includes('rain')) {
    icon = 'rain';
  } else {
    icon = 'sun';
  }
  
  let cityContainer = `
  <h1 class="text-center">${cityName}
  <img id="weather-icon" src="assets/weather-icons/${icon}.png" alt="${icon}" />
  </h1>
  `;
  
  $('#city-container').html(cityContainer);
  
}

function displayInfoContainer(desc, rain) {
  
  let infoContainer = `
    <h3 class="text-capitalize">${desc}</h3>
    <h3>Rain Volume: ${rain}</h3> 
  `;
  
  if (rain !== 'none') infoContainer += '<small>For the last 3 hours</small>';
  
  $('#info-container').html(infoContainer);
  
}