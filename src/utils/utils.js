export const parseString = (string, parseMethod = " ") => {
  const parsedStrings = string.split(parseMethod);
  return parsedStrings;
};

const getCityName = (labels) => {
  const cityNameLabels = labels.slice(0, -1);
  const cityName = cityNameLabels.reduce(
    (label, nextLabel) => label + ` ${nextLabel}`,
    ""
  );
  return cityName;
};

const getCountryCode = (labels) => {
  const countryCode = labels.pop();
  return countryCode;
};

export const parseLocationObject = (input) => {
  const labels = parseString(input.label);
  const latAndLon = parseString(input.value);

  const locationObject = {
    city: getCityName(labels),
    countryCode: getCountryCode(labels),
    lat: latAndLon[0],
    lon: latAndLon[1],
  };

  return locationObject;
};

export const roundTemp = (temp) => {
  const temperature = Number(temp);
  return Math.round(temperature);
};

export const createCurrentWeatherObject = (weatherResponse) => {
  const locationProperty = weatherResponse.location;
  const weatherProperty = weatherResponse.current;
  const currentWeatherObject = {
    city: locationProperty.name,
    region: locationProperty.region ?? "",
    country: locationProperty.country,
    currentTemp: roundTemp(weatherProperty.temp_c),
    feelsLike: roundTemp(weatherProperty.feelslike_c),
    description: weatherProperty.condition.text,
    icon: weatherProperty.condition.icon,
    date: parseString(locationProperty.localtime)[0],
    time: parseString(locationProperty.localtime)[1],
  };

  const forecastProperty = weatherResponse.forecast.forcastday;
  // date=forecastProperty[0].date
  // timeProperty = forecastProperty[0].astro.sunrise (or sunset)
  const tempProperty = forecastProperty[0].day;
  // maxTemp = tempProperty.maxtemp_c;
  // minTemp = tempProperty.mintemp_c;
  // description = tempProperty.condition.text;
  // icon = tempProperty.condition.icon

  const forecastObject = {
    date: forecastProperty[0].date,
    // sunrise:"",
    // sunset:"",
    maxTemp: tempProperty.maxtemp_c,
    minTemp: tempProperty.mintemp_c,
    description: tempProperty.condition.text,
    icon: tempProperty.condition.icon,
  };

  return [currentWeatherObject, forecastObject];
};

// export const createForecastObject = (weatherResponse) => {
//   const forecastProperty = weatherResponse.forecast.forcastday;
//   console.log(weatherResponse);
//   // date=forecastProperty[0].date
//   // timeProperty = forecastProperty[0].astro.sunrise (or sunset)
//   const tempProperty = forecastProperty[0].day;
//   // maxTemp = tempProperty.maxtemp_c;
//   // minTemp = tempProperty.mintemp_c;
//   // description = tempProperty.condition.text;
//   // icon = tempProperty.condition.icon

//   const forecastObject = {
//     date: forecastProperty[0].date,
//     // sunrise:"",
//     // sunset:"",
//     maxTemp: tempProperty.maxtemp_c,
//     minTemp: tempProperty.mintemp_c,
//     description: tempProperty.condition.text,
//     icon: tempProperty.condition.icon,
//   };
//   return forecastObject;
// };
