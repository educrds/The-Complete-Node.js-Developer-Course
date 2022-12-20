const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

// Updating Unique Task by ID
router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdateds = ['description', 'completed'];

  const isValidOperation = updates.every((update) =>
    allowedUpdateds.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid field(s) to update!' });
  }

  try {
    const task = await Task.findById(req.params.id);

    updates.forEach((update) => (task[update] = req.body[update]));

    await task.save();

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Passing Task data by POST, fetching the data and adding to the DB
router.post('/tasks', async (req, res) => {
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
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Reading unique task by ID
router.get('/tasks/:id', async (req, res) => {
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

// Deleting Task by ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;
