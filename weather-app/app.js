const geocode = require('./utils/geocode');
const forecast = require('./utils/forescast');

geocode('Sao paulo', (error, data) => console.log(data));

forecast(-46.6334, -23.5507, (error, data) => console.log(data));
