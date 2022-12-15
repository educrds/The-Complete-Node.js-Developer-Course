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

    // CREATE - Inserting one object into the users collection

    // db.collection('users')
    //   .insertOne({ name: 'Vikram', age: 70 })
    //   .then((result, error) => {
    //     if (error) return console.log('Unable to insert document');
    //     console.log(result);
    //   });

    // CREATE - Inserting many objects into the users collection

    // db.collection('tasks')
    //   .insertMany([
    //     { description: 'start studying Node', completed: true },
    //     { description: 'start studying React', completed: false },
    //     { description: 'start studying English again', completed: false },
    //   ])
    //   .then((result, error) => {
    //     if (error) return console.log('Unable to insert document');
    //     console.log(result.insertedIds);
    //   });
  }
);
