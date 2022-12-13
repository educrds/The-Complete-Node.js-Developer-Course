const express = require('express');
const path = require('path');
const port = 5050;

const app = express();

// define paths for express config
const publicDir = path.join(__dirname, '../public');

// setup handlebars engine and views location
app.set('view engine', 'hbs');

// setup static dir to serve
app.use(express.static(publicDir));

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
    call: 'Call me: (321) 8909-09888',
  });
});

app.get('/weather', (req, res) => res.send('Weather today is...'));

// initialize server in a specific Port
app.listen(port, () => console.log(`Server is running on port ${port}`));
