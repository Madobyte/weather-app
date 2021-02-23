export const changeTheme = () => {
  const time = `${new Date().getHours()}.${new Date().getMinutes()}`;
  if (time < 6 || time <= 12) {
    //morning
    document.body.style.backgroundColor = "#85c8ff";
  } else if (time < 12 || time <= 18) {
    //afternoon
    document.body.style.backgroundColor = "orange";
  } else {
    //night
    document.body.style.backgroundColor = "#00006e";
    document.body.style.color = "white";
  }
};
