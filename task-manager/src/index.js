require('./db/mongoose');
const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Passing User data by POST, fetching the data and adding to the DB
app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(201).send(user))
    // change response status
    .catch((e) => res.status(400).send(e.message));
});

// Reading Users
app.get('/users', (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((e) => res.status(400).send(e.message));
});

// Reading unique User by ID
app.get('/users/:id', (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => res.status(500).send());
});

// Passing Task data by POST, fetching the data and adding to the DB
app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => res.status(201).send(task))
    // change response status if error
    .catch((e) => res.status(400).send(e.message));
});

// listening server port
app.listen(port, () => console.log(`Server is running on port ${port}`));
