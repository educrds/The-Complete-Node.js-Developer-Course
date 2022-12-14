require('./db/mongoose');
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
