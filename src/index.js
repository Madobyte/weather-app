import "./assets/css/app.scss";
import { changeTheme } from "./assets/js/changeTheme";
import { createDates } from "./assets/js/createDates";
import { createWeatherCards } from "./assets/js/createWeatherCards";
import { openSearch } from "./assets/js/openSearch";
import { openTab } from "./assets/js/openTab";
import getLocation from "./assets/js/getLocation";
import { mouseDownHandler } from "./assets/js/dragEvent";
import { settings } from "./assets/js/settings";

changeTheme();
settings();
createWeatherCards();
createDates();
openTab();
openSearch();
mouseDownHandler("#dates-container");
mouseDownHandler("#hourly-weather");

window.addEventListener("load", getLocation);
