export const splitToChunks = (array) => {
  let result = [];
  let thisDay = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (i + 1 < array.length) {
      const accUTS = array[i].dt;
      const currUTS = array[i + 1].dt;
      const accDate = new Date(accUTS * 1000);
      const currDate = new Date(currUTS * 1000);
      const accHours = accDate.getHours();
      const currHours = currDate.getHours();

      if (accHours < currHours) {
        thisDay.push(array[i]);
      } else {
        thisDay.push(array[i]);
        result.push(thisDay);
        thisDay = [];
      }
    }
  }
  return result;
};
