const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forescast');
const path = require('path');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 5050;

// define paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static dir to serve
app.use(express.static(publicDir));

// express routes
app.get('', (req, res) =>
  res.render('index', {
    title: 'Weather',
    name: 'Eduardo Cardoso',
  })
);

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Eduardo Cardoso',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Need help?',
    name: 'Eduardo Cardoso',
    call: 'Call me: (321) 8909-09888',
  });
});

app.get('/weather', (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({
      error: 'You must provide a correct address!',
    });
  }

  geocode(address, (error, { longitude, latitude, location } = {}) => {
    if (error)
      return res.send({
        error,
      });

    forecast(longitude, latitude, (error, forecastData) => {
      if (error)
        return res.send({
          error,
        });

      res.send({
        location: location,
        forecast: forecastData,
      });
    });
  });
});

// 404 route
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    error: 'Article not found',
    name: 'Eduardo',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    error: 'Page not found',
    name: 'Eduardo',
  });
});

// initialize server in a specific Port
app.listen(port, () => console.log(`Server is running on port ${port}`));
