import { renderDate } from "./renderDates";
import { renderHourlyWeather } from "./renderHourlyWeather";
import { splitToChunks } from "./splitToChunks";

export const getHourlyWeather = () => {
  const data = JSON.parse(localStorage.getItem("weather"));
  const chunkedArray = splitToChunks(Object.values(data));
  renderDate(chunkedArray);
  renderHourlyWeather(chunkedArray);
};
