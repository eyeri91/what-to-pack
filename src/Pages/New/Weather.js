import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLatAndLon,
  CURRENT_WEATHER_API_CONDITION,
  CURRENT_WEATHER_API_URL,
  FORECAST_API_URL,
  FORECAST_API_CONDITION,
  WEAHTER_API_KEY,
} from "../../services/WeatherAPI";
import { roundTemp } from "../../utils/utils";
import { checkWeather, checkForecast } from "../../redux/actions";
import CurrentWeather from "./CurrentWeather";

const createCurrentObjectDetails = (currentWeatherInfo) => {
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

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const dispatch = useDispatch();

  const location = useSelector((state) => state.location);
  const latAndLon = setLatAndLon(location.lat, location.lon);

  useEffect(() => {});

  const currentWeatherFetch = fetch(
    CURRENT_WEATHER_API_URL +
      latAndLon +
      CURRENT_WEATHER_API_CONDITION +
      WEAHTER_API_KEY
  );
  const forecastFetch = fetch(
    FORECAST_API_URL + latAndLon + FORECAST_API_CONDITION + WEAHTER_API_KEY
  );

  Promise.all([currentWeatherFetch, forecastFetch]).then(async (res) => {
    const currentWeatherResponse = await res[0].json();
    const forecastResponse = await res[1].json();

    const createCurrentObject = createCurrentObjectDetails(
      currentWeatherResponse
    );
    // console.log(createCurrentObject);
    dispatch(checkWeather(createCurrentObject));
    setCurrentWeather(createCurrentObject);
  });

  return <div>Here is the weather</div>;
};
export default Weather;
