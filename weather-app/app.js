const request = require('request');
const chalk = require('chalk')

const apiKey = '524be49095a00669fc39e4eb593c2750';
const apiURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=37.8267,-122.4233&units=m`;

request({url:apiURL, json:true}, (error, response) => {
  const data = response.body.current;
  console.log(chalk.green(`It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`));
});
 