import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherApi } from "openmeteo";

export const getWeatherData = createAsyncThunk(
  "getWeatherData/get",
  async () => {
    const params = {
      latitude: 50.75,
      longitude: 4.5,
      current: [
        "temperature_2m",
        "is_day",
        "rain",
        "showers",
        "snowfall",
        "weather_code",
        "cloud_cover",
        "wind_speed_10m",
      ],
      timezone: "auto",
      forecast_days: 1,
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0)!.value(),
        isDay: current.variables(1)!.value(),
        rain: current.variables(2)!.value(),
        showers: current.variables(3)!.value(),
        snowfall: current.variables(4)!.value(),
        weatherCode: current.variables(5)!.value(),
        cloudCover: current.variables(6)!.value(),
        windSpeed10m: current.variables(7)!.value(),
      },
    };

    return weatherData;
    
  
  },
);
