const mongoose = require('mongoose');

// Connecting DB
mongoose.connect('mongodb://127.0.0.1:27017/db_task_manager');

// Creating Task model
const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

