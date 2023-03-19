export const WEAHTER_API_KEY = "c6c588d9f20d96f525cf99708e91edee";

export const CURRENT_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5/weather?";
export const CURRENT_WEATHER_API_CONDITION = "&units=metric&appid=";

export const FORECAST_API_URL =
  "https://api.openweathermap.org/data/2.5/forecast?";
export const FORECAST_API_CONDITION = "&cnt=5&units=metric&appid=";

export const setLatAndLon = (lat, lon) => {
  return `lat=${lat}&lon=${lon}`;
};
