const request = require('request');

const geoCode = (address, callback) => {
  const key =
    'pk.eyJ1IjoiamFtaXg0NzcxOCIsImEiOiJjbGJrczE3dmUwMGl1M25xeGd6c3A1cms1In0.F2HDlyv-9MgtQZVfig0Z0w';
  const apiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${key}&limit=1&language=pt`;

  request({ url: apiURL, json: true }, (error, response) => {
    if (error) callback('Unable to connect to location services!', undefined);
    else if (response.body.features.length === 0)
      callback('Unable to find location. Try another search!', undefined);
    else {
      callback(undefined, {
        location: response.body.features[0].place_name,
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
      });
    }
  });
};

module.exports = geoCode;
