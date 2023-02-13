const weather = {
  apiKey: "c6c588d9f20d96f525cf99708e91edee",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        city +
        "&units=metric&cnt=10&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.getWeatherDetails(data));
  },
  getWeatherDetails: (data) => {
    console.log(data);
    // const weatherDetails = {
    //   location: data.city.name,
    //   status: data.weather[0].main,
    //   description: data.weather[0].description,
    //   currentTemp: data.main.temp,
    //   maxTemp: data.main.temp_max,
    //   minTemp: data.main.temp_min,
    // };
    // console.log(weatherDetails);
  },
};

export default weather;

// https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=c6c588d9f20d96f525cf99708e91edee

// {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":274.93,"feels_like":273.56,"temp_min":272.17,"temp_max":276.38,"pressure":1038,"humidity":89},"visibility":10000,"wind":{"speed":1.41,"deg":135,"gust":1.89},"clouds":{"all":5},"dt":1675802444,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1675754990,"sunset":1675789167},"timezone":0,"id":2643743,"name":"London","cod":200}
