require('./db/mongoose');
const bcrypt = require('bcryptjs');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// listening server port
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Using bcrypt algorithm library for hash password
// const myFunc = async () => {
//   const password = 'edu1234';
//   const hashedPassword = await bcrypt.hash(password, 8);

//   const isMatch = await bcrypt.compare('edu1234', hashedPassword);

//   console.log(isMatch);
// };

// myFunc();
