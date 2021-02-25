export const changeTheme = () => {
  const link = document.querySelector("a");
  const searchLocationInput = document.getElementById("search-location-input");
  const time = `${new Date().getHours()}.${new Date().getMinutes()}`;
  if (time < 6 || time <= 12) {
    //morning
    document.body.style.backgroundColor = "#85c8ff";
    document.body.style.color = "#264653";
  } else if (time < 12 || time <= 18) {
    //afternoon
    document.body.style.backgroundColor = "orange";
    document.body.style.color = "#f1faee";
    link.style.color = "#f1faee";
  } else {
    //night
    document.body.style.backgroundColor = "#00006e";
    document.body.style.color = "#f1faee";
    link.style.color = "#f1faee";
  }
};
