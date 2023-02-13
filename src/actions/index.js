export const getLocation = (locationObject) => {
  return {
    type: "GETLOCATION",
    payload: locationObject,
  };
};

export const checkWeather = () => {
  return {
    type: "CHECKWEATHER",
  };
};

export const checkForecast = (days) => {
  return {
    type: "CHECKFORECAST",
    payload: days,
  };
};
