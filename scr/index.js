function displayWeather(response) {
  let tempature = Math.round(response.data.main.temp);
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#current-city");
  city.innerHTML = `${searchInput.value}`;
  let headding = document.querySelector("#temperature");
  headding.innerHTML = `${tempature} °F`;
}


function searchCity(city) {
  let apiKey = "6d5a998b9f3fae74bdc99908c7732e4b";
  let searchCity = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}
  function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#current-city");
  searchCity(city);
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", search);

