const request = require('request');

const forecast = (long, lat, callback) => {
  const apiURL = `http://api.weatherstack.com/current?access_key=524be49095a00669fc39e4eb593c2750&query=${lat},${long}&units=m`;

  request({ url: apiURL, json: true }, (error, response) => {
    if (error) callback('Unable to connect to weather service!', undefined);
    else if (response.body.error) callback('Unable to find location', undefined);
    else {
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out. It is ${response.body.current.weather_descriptions}`
      );
    }
  });
};

module.exports = forecast;
