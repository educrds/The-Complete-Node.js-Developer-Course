const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = 5050;

const app = express();

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
    name: 'Eduardo',
  })
);

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Eduardo',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Need help?',
    name: 'Eduardo',
    call: 'Call me: (321) 8909-09888',
  });
});

app.get('/weather', (req, res) => res.send('Weather today is...'));

// 404 route
app.get('/help/*', (req, res) => {
  res.render('404', {
    title:'404',
    error: 'Article not found',
    name:'Eduardo'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title:'404',
    error: 'Page not found',
    name:'Eduardo'
  });
});

// initialize server in a specific Port
app.listen(port, () => console.log(`Server is running on port ${port}`));
