const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;
