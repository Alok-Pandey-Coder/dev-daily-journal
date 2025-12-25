document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById('city-input');
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const errorMessage = document.getElementById('error-message');

  const API_Key = `a344693683c939b186af89b5c38fd297` // env variable

  cityInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
      getWeatherBtn.click();
    }
  })

  getWeatherBtn.addEventListener('click', async () => {
    const inputData = cityInput.value.trim();
    if(!inputData) return;

   try {
    const data = await fetchWeatherData(inputData);
    displayWeatherData(data);
   } catch (error) {
    showError();
   }

  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`;
    const data = await fetch(url);

    if(!data.ok) {
      throw new Error("City not found");
    }
    const response = await data.json();
    return response;
  }

  function displayWeatherData(data) {
    const {name, main, weather} = data;
    cityName.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    description.textContent = `Weather : ${weather[0].description}`;
   

    const iconCode = data.weather[0].icon; // Get the code like '10d'
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    const iconImg = document.getElementById('weather-icon');
    iconImg.src = iconUrl;
    
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');


  }

  function showError() {
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }
});
