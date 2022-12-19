const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// passing data by POST, fetching the data and adding to the DB
app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send(user))
    .catch((e) => {
      // change response status
      res.status(400).send(e.message);
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
