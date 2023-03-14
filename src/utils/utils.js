export const locationObjectParser = (input) => {
  const labels = input.label.split(" ");
  const latAndLon = input.value.split(" ");

  const locationObject = {
    city: labels[0],
    countryCode: labels[1],
    lat: latAndLon[0],
    lon: latAndLon[1],
  };
  return locationObject;
};

export const roundTemp = (temp) => {
  const temperature = Number(temp);
  return Math.round(temperature);
};

export const createCurrentWeatherObject = (currentWeatherInfo) => {
  const currentWeatherObject = {
    name: currentWeatherInfo.name,
    countryCode: currentWeatherInfo.sys.country,
    currentTemp: roundTemp(currentWeatherInfo.main.temp),
    feelsLike: roundTemp(currentWeatherInfo.main.feels_like),
    description: currentWeatherInfo.weather[0].description,
    main: currentWeatherInfo.weather[0].main,
    icon: currentWeatherInfo.weather[0].icon,
  };

  return currentWeatherObject;
};

// export const createForecastObject = (forecastInfo) => {
//   const forecastObject = {};
//   return forecastObject;
// };
