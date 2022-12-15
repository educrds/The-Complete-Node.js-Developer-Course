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

    // db.collection('users')
    //   .findOne({ _id: '639b64f3ed15193646df64b0' })
    //   .then((result, error) => {
    //     if (error) return console.log('Unable to insert document');
    //     console.log(result);
    //   });

    // READ - Find document with condition
    db.collection('tasks')
      .find({ completed: false })
      .toArray()
      .then((result, error) => {
        if (error) return console.log('Unable to find documents');
        console.log(result);
      });

    // READ - Count documents with condition
    // db.collection('users')
    //   .countDocuments({ age: 32 })
    //   .then((result, error) => {
    //     if (error) return console.log('Unable to find documents');
    //     console.log(result);
    //   });
  }
);
