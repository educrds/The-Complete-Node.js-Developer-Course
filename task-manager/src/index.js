require('./db/mongoose');
const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// passing User data by POST, fetching the data and adding to the DB
app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((e) => {
      // change response status
      res.status(400).send(e.message);
    });
});

// passing Task data by POST, fetching the data and adding to the DB
app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => res.status(201).send(task))
    .catch((e) => {
      // change response status
      res.status(400).send(e.message);
    });
});

// listening server port
app.listen(port, () => console.log(`Server is running on port ${port}`));
