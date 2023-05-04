export const getLocation = (locationObject) => {
  return {
    type: "GETLOCATION",
    payload: locationObject,
  };
};

export const checkWeather = (weatherObject) => {
  return {
    type: "CHECKWEATHER",
    payload: weatherObject,
  };
};

export const checkForecast = (forecastObject) => {
  return {
    type: "CHECKFORECAST",
    payload: forecastObject,
  };
};

export const deleteListItem = (updatedCategoryObject) => {
  return {
    type: "DELETELISTITEM",
    payload: updatedCategoryObject,
  };
};
