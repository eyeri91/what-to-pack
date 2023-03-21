import { couldStartTrivia } from "typescript";

const stringParser = (string, parseMethod = " ") => {
  const parsedStrings = string.split(parseMethod);
  return parsedStrings;
};

export const locationObjectParser = (input) => {
  const labels = stringParser(input.label);
  const latAndLon = stringParser(input.value);

  const locationObject = {
    city: labels.length > 2 ? `${labels[0]} ${labels[1]}` : labels[0],
    countryCode: labels.length > 2 ? labels[2] : labels[1],
    lat: latAndLon[0],
    lon: latAndLon[1],
  };
  console.log(locationObject);
  return locationObject;
};

export const roundTemp = (temp) => {
  const temperature = Number(temp);
  return Math.round(temperature);
};

export const createCurrentWeatherObject = (currentWeatherInfo) => {
  // console.log(currentWeatherInfo);
  const locationProperty = currentWeatherInfo.location;
  const weatherProperty = currentWeatherInfo.current;
  const currentWeatherObject = {
    city: locationProperty.name,
    country: locationProperty.country,
    currentTemp: roundTemp(weatherProperty.temp_c),
    feelsLike: roundTemp(weatherProperty.feelslike_c),
    description: weatherProperty.condition.text,
    icon: weatherProperty.condition.icon,
    date: stringParser(locationProperty.localtime)[0],
  };

  return currentWeatherObject;
};

export const createForecastObject = (forecastInfo) => {
  const forecastObject = {};
  return forecastObject;
};
