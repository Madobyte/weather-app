import { weather } from "./app";
import { renderDate } from "./renderDates";
import { renderHourlyWeather } from "./renderHourlyWeather";
import { splitToChunks } from "./splitToChunks";

export const hourlyWeather = weather.getWeatherData().then((res) => {
  const chunkedArray = splitToChunks(res);
  renderDate(chunkedArray);
  renderHourlyWeather(chunkedArray);
});
