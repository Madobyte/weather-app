import { weather } from "./weather";
const searchLocationInput = document.getElementById("search-location-input");

export const openSearch = () => {
  const searchIcon = document.querySelector(".fa-search");
  searchIcon.addEventListener("click", (e) => {
    if (searchLocationInput.value !== "") getLocationData(e);
    else openSearchInput();
  });
  const currentLocation = document.getElementById("current-location");
  currentLocation.addEventListener("click", openSearchInput);
  searchLocationInput.addEventListener("keyup", (e) => {
    getLocationData(e);
  });
};

const openSearchInput = () => {
  searchLocationInput.classList.remove("remove");
  searchLocationInput.style.display = "block";
};

const getLocationData = (e) => {
  if (e.key === "Enter" || e.keyCode === 13 || e.type === "click") {
    const city = searchLocationInput.value;
    weather.getDataFromCity(city);
    if (screen.width <= 500) {
      searchLocationInput.classList.add("remove");
      searchLocationInput.addEventListener(
        "animationend",
        () => {
          searchLocationInput.style.display = "none";
        },
        { once: true }
      );
    }
    searchLocationInput.value = "";
  }
};
