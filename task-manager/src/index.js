require('./db/mongoose');
const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Passing User data by POST, fetching the data and adding to the DB
app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    // change response status
    res.status(400).send(e.message);
  }
});

// Reading Users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Reading unique User by ID
app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Updating Unique User by ID
app.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdateds = ['name', 'email', 'password', 'age'];

  const isValidOperation = updates.every((update) =>
    allowedUpdateds.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid field(s) to update!' });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Updating Unique Task by ID
app.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdateds = ['description', 'completed'];

  const isValidOperation = updates.every((update) =>
    allowedUpdateds.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid field(s) to update!' });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Passing Task data by POST, fetching the data and adding to the DB
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    // change response status
    res.status(400).send(e.message);
  }
});

// Reading tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Reading unique task by ID
app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

// listening server port
app.listen(port, () => console.log(`Server is running on port ${port}`));
