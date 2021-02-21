import "./assets/css/app.scss";
import { weather } from "./assets/js/app";

const today = weather.getWeatherData();
today.then((res) => console.log(res[0].main));
