const request = require('request')

const apiKey = '524be49095a00669fc39e4eb593c2750';
const apiURL = 'http://api.weatherstack.com/current?access_key=${apiKey}';

request(apiURL)
    .then((response) => console.log(response));
