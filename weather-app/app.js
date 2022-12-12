const geocode = require('./utils/geocode');
const forecast = require('./utils/forescast');

const address = process.argv[2];

if (!address) console.log('Please provide an adress');
else {
  geocode(address, (error, data) => {
    const { longitude, latitude, location } = data;
    if (error) return console.log(error);

    forecast(longitude, latitude, (error, forecastData) => {
      if (error) return console.log(error);
      console.log(location);
      console.log(forecastData);
    });
  });
}
