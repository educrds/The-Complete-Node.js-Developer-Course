require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.send('GET requests are disabled');
  } else {
    next();
  }
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// listening server port
app.listen(port, () => console.log(`Server is running on port ${port}`));

const jwt = require('jsonwebtoken');

// Using bcrypt algorithm library for hash password
const myFunc = async () => {
  const token = jwt.sign({ _id: 'ábc123' }, 'thisismy', { expiresIn: '7 days' });

  console.log(token);

  console.log(jwt.verify(token, 'thisismy'));
};

myFunc();
