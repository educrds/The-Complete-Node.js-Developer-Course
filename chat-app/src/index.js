const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const Filter = require('bad-words');
const { generateMessage, generateLocationMessage } = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

io.on('connection', (socket) => {
  // Alert when new user joined the session

  socket.emit('message', generateMessage('Welcome'));
  socket.broadcast.emit('message', generateMessage('A new user has joined'));

  // ------- Message

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter();

    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed!');
    }

    io.emit('message', generateMessage(message));
    callback();
  });
  // ------- Location

  socket.on('sendLocation', (coords, callback) => {
    io.emit(
      'locationMessage',
      generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    );
    callback();
  });

  // Alert when an user left session

  socket.on('disconnect', () => {
    io.emit('message', generateMessage('A new user has left!'));
  });
});

server.listen(port, () => console.log('Server is running on port 3000'));
