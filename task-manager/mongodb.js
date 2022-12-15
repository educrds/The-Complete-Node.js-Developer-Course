const { MongoClient, ObjectId } = require('mongodb');

// Database name and port connection
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'db_tasks';

const id = new ObjectId();

// establishing connection with MongoDB
MongoClient.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
  },
  (err, client) => {
    if (err) return console.log('Unable to connect to database!');

    // Creating db_tasks
    const db = client.db(databaseName);

    // UPDATE - updating a task
    db.collection('tasks')
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
);
