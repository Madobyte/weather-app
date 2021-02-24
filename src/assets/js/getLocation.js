import { weather } from "./weather";

export default function getLocation() {
  weather.getDataFromCity(); //sets the data even if the access to location is denied

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  } else {
    console.log("1");
  }
}

function success(position) {
  localStorage.setItem("position", position);
  console.log("Location access granted.");
  weather.getDataFromLocation(position);
}

function fail() {
  console.log("Location access was denied.");
}
