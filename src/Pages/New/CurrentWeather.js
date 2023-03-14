import React from "react";

// import { useSelector } from "react-redux";

const WeatherCard = ({ props }) => {
  // const currentWeatherState = useSelector((state) => state.currentWeather);
  // console.log(currentWeatherState);

  // const currentWeatherObject = {
  //   name: currentWeatherInfo.name,
  //   countryCode: currentWeatherInfo.sys.country,
  //   currentTemp: roundTemp(currentWeatherInfo.main.temp),
  //   feelsLike: roundTemp(currentWeatherInfo.main.feels_like),
  //   description: currentWeatherInfo.weather[0].description,
  //   main: currentWeatherInfo.weather[0].main,
  //   icon: currentWeatherInfo.weather[0].icon,
  // };
  return (
    <div className="weather-card">
      <h1>{`${props.name} ${props.countryCode}`}</h1>
      <h3>Current Temperature: {props.currentTemp}</h3>
      <h3>Feels like: {props.feelsLike}</h3>
      <p>
        Description: {props.description}, Main: {props.main}, Icon: {props.icon}
      </p>
    </div>
  );
};

export default WeatherCard;
