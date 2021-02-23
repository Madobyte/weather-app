export const openTab = () => {
  const tabContent = document.querySelectorAll(".daily-weather-container");
  const tabLinks = document.querySelectorAll(".date");
  const today = document.getElementById("day0");

  tabContent.forEach((tab) => {
    tab.style.display = "none";
  });

  tabLinks.forEach((link) => {
    link.addEventListener("click", showContent);
  });

  today.click();
};

const showContent = (e) => {
  const tabContent = document.querySelectorAll(".daily-weather-container");
  const tabLinks = document.querySelectorAll(".date");
  const tab = e.target;
  const day = e.target.id;

  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  tabContent.forEach((tab) => {
    tab.style.display = "none";
  });

  tab.classList.add("active");

  const hourlyWeather = document.getElementById(`${day}-cards`);
  hourlyWeather.scrollLeft = 0;
  hourlyWeather.style.display = "grid";
};
