const express = require('express');
const path = require('path');
const port = 5050;

const app = express();
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir))

app.get('/weather', (req, res) => res.send('Weather today is...'));

// initialize server in a specific Port
app.listen(port, () => console.log(`Server is running on port ${port}`));
