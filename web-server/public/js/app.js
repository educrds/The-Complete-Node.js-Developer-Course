const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const locationText = document.getElementById('location-text');
const forecastText = document.getElementById('forecast-text');

weatherForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const location = search.value;
  const urlAPI = `/weather?address=${location}`;

  fetch(urlAPI)
    .then((response) => response.json())
    .then(({ location, forecast, error }) => {
      if (error) locationText.textContent = error;
      else {
        locationText.innerHTML = location;
        forecastText.innerHTML = forecast;
      }
    });
}
