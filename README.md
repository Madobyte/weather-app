# weatherApp Project

**by M. Bambalan**\
**Technologies used:**

- HTML5
- CSS3
  - Font Awesome 5
- Sass
  - Nesting
- Javascript
  - webpack
  - localStorage API
  - OpenWeatherMap's Weather API
  - Geolocation API

## Dev's Reflection

I started learning `webpack` a while ago. Setup is tedious but is all worth it at the end. `Webpack`'s output is said to have a great performance because it minifies every thing (js and css files).

I touched APIs again. Rehashed how to use `Promise`s,`async`s, `await`s, and `json`s. I get data from the **Weather API** of OpenWeatherMap.

## Features

[x] Weather data from current device location using `Geolocation API`
[x] Use of `localStorage` for offline use
[x] Search the weather of a city
[x] Toggle units from metrics to imperial and vice versa
[x] Background color changes depending on time of day (light blue for morning, orange for afternoon, and navy blue for evenig)

## Commits

**02/21/2021 - Initial Commit**\
Created a mockup of the whole app. Data were hard-coded.

**02/22/2021**\
Rendered the data from the Weather API.

**02/23/2021**\
Converted the rendered time to local time from UTC. Added theme depending on the time of day. The search and `geolocation` features do not work yet.

**02/24/2021**\
Refactoring the flow of the code. I realized that it's better to get the data from the API _on window load_, _after location prompt_, or _by user request_ via the search bar. Used `localStorage` to store fetched data.

Finally, got the geolocation API to work.

Added `dragEvent` for desktop users.

**02/25/2021**\
Added a toggle to change temperature units from metric to imperial and vice versa.
