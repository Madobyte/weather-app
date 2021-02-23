export const createDates = () => {
  const datesContainer = document.getElementById("dates-container");
  for (let i = 0; i <= 4; i++) {
    const date = document.createElement("a");
    date.id = `day${i}`;
    date.classList.add("date");
    date.innerText = "Placeholder text";
    datesContainer.appendChild(date);
  }
};
