export const openSearch = () => {
  const searchIcon = document.querySelector(".fa-search");
  searchIcon.addEventListener("click", openSearchInput);
  const currentLocation = document.getElementById("current-location");
  currentLocation.addEventListener("click", openSearchInput);
};

const openSearchInput = () => {
  const searchLocationInput = document.getElementById("search-location-input");
  if (searchLocationInput.style.display === "block") {
    //
  }
  searchLocationInput.style.display = "block";
};
