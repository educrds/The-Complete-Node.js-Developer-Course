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

    // DELETE - deleting a user
    db.collection('users')
      .deleteOne({ name: 'Vikram' })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
);
