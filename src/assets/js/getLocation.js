export default function getLocation() {
  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(success, fail));
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  return position;
}

function fail(position) {
  return position;
}
