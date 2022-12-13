const express = require('express');
const port = 5050;

const app = express();

app.get('/', (req, res) => res.send('Hello express!'));

app.get('/help', (req, res) => res.send('Need help?'));

app.get('/about', (req, res) => res.send('About us'));

app.get('/weather', (req, res) => res.send('Weather today is...'));

// initialize server in a specific Port
app.listen(port, () => console.log(`Server is running on port ${port}`));
