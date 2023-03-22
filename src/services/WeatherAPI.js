export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac86ebc8d7msh0ec9aa2ac72e9dcp185595jsn0f3920d1a068",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const CURRENT_WEATHER_API_URL =
  "https://weatherapi-com.p.rapidapi.com/current.json?";
// export const CURRENT_WEATHER_API_CONDITION = "&units=metric&appid=";

export const FORECAST_API_URL =
  "https://weatherapi-com.p.rapidapi.com/forecast.json?";
export const FORECAST_API_CONDITION = (days) => `&days=${days}`;

export const setLatAndLon = (lat, lon) => {
  return `${lat},${lon}`;
};

// export const currentWeatherFetch = (latAndLon) =>
//   fetch(CURRENT_WEATHER_API_URL + `q=${latAndLon}`, options);

export const fetchWeather = (latAndLon) =>
  fetch(
    FORECAST_API_URL + `q=${latAndLon}` + FORECAST_API_CONDITION(3),
    options
  );
