export const parseString = (string, parseMethod = " ") => {
  const parsedStrings = string.split(parseMethod);
  return parsedStrings;
};

export const reformDate = (date, joinMethod, removeYear) => {
  const parsedDate = parseString(date, "-");
  if (removeYear) parsedDate.shift();
  const reformedDate = parsedDate.join(joinMethod);
  return reformedDate;
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

export const createWeatherObjects = (weatherResponse) => {
  const locationProperty = weatherResponse.location;
  const weatherProperty = weatherResponse.current;
  const date = parseString(locationProperty.localtime)[0];
  const time = parseString(locationProperty.localtime)[1];
  const id = reformDate(date, "");
  const currentWeatherObject = {
    id: id,
    city: locationProperty.name,
    region: locationProperty.region ?? "",
    country: locationProperty.country,
    currentTemp: roundTemp(weatherProperty.temp_c),
    feelsLike: roundTemp(weatherProperty.feelslike_c),
    description: weatherProperty.condition.text,
    icon: weatherProperty.condition.icon,
    date: reformDate(date, "/", true),
    time: time,
  };

  console.log(currentWeatherObject);

  const forecastObjectsArray = [];
  const forecastArray = weatherResponse.forecast.forecastday;
  // Remove the first item in the array as it is the same as today's weather
  forecastArray.shift();

  forecastArray.forEach((item) => {
    const forecastForDay = createForecastObject(item);
    forecastObjectsArray.push(forecastForDay);
  });

  return [currentWeatherObject, forecastObjectsArray];
};

const createForecastObject = (forecastItem) => {
  const tempProperty = forecastItem.day;
  const id = reformDate(forecastItem.date, "");
  const date = reformDate(forecastItem.date, "/", true);
  const forecastForDay = {
    id: id,
    date: date,
    maxTemp: tempProperty.maxtemp_c,
    minTemp: tempProperty.mintemp_c,
    description: tempProperty.condition.text,
    icon: tempProperty.condition.icon,
  };

  return forecastForDay;
};
