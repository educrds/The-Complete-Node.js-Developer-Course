const mongoose = require('mongoose');
const validator = require('validator');

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

// Creating instance of Task model
const task = new Task({
  description: 'Practice queries in MySQL'
});

// Saving data to DB
task
  .save()
  .then((me) => console.log(me))
  .catch((error) => console.log(error));

// Creating User model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [7, 'Password must be at least 6'],
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Try another password');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number!');
      }
    },
  },
});

// Creating instance of User model
// const me = new User({
//   name: 'Mike',
//   email: 'mike@gmail.com',
//   password: 123,
//   age: 32,
// });

// Saving data to DB
// me.save()
//   .then((me) => console.log(me))
//   .catch((error) => console.log(error));
