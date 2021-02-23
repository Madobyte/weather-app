import clearSkyDay from "../images/01d.svg";
import clearSkyAfternoon from "../images/01m.svg";
import clearSkyNight from "../images/01n.svg";
import fewCloudsDay from "../images/02d.svg";
import fewCloudsAfternoon from "../images/02m.svg";
import fewCloudsNight from "../images/02n.svg";
import scatteredClouds from "../images/03.svg";
import drizzle from "../images/09.svg";
import rainDay from "../images/10d.svg";
import thunderstormDay from "../images/11d.svg";
import thunderstormNight from "../images/11n.svg";
import snow from "../images/13.svg";
import atmosphere from "../images/50.svg";

export const determineIcon = (main, desc) => {
  const time = `${new Date().getHours()}.${new Date().getMinutes()}`;
  switch (main) {
    case "Clear":
      if (time > 6 && time <= 12) return clearSkyDay;
      else if (time > 12 && time <= 18) return clearSkyAfternoon;
      else return clearSkyNight;
    case "Clouds":
      if ((desc = "few clouds: 11-25%")) {
        if (time > 6 && time <= 12) return fewCloudsDay;
        else if (time > 12 && time <= 18) return fewCloudsAfternoon;
        else return fewCloudsNight;
      } else if ((desc = "scattered clouds: 25-50%")) {
        return scatteredClouds;
      } else return scatteredClouds;
    case "Drizzle":
      return drizzle;
    case "Rain":
      return rainDay;
    case "Thunderstorm":
      if (time > 6 && time <= 18) return thunderstormDay;
      else return thunderstormNight;
    case "Snow":
      return snow;
    case "Mist" ||
      "Smoke" ||
      "Haze" ||
      "Dust" ||
      "Fog" ||
      "Sand" ||
      "Dust" ||
      "Ash" ||
      "Squall" ||
      "Tornado":
      return atmosphere;
  }
};

const thunderstorm = [
  "thunderstorm with light rain",
  "thunderstorm with rain",
  "thunderstorm with heavy rain",
  "light thunderstorm",
  "thunderstorm",
  "heavy thunderstorm",
  "ragged thunderstorm",
  "hunderstorm with light drizzle",
  "",
  "",
];
