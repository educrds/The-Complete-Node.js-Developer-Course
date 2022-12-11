const request = require('request');

const apiKey = '524be49095a00669fc39e4eb593c2750';
const apiURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=37.8267,-122.4233&units=m`;

request(apiURL, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
 