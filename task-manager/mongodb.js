// CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Database name and port connection
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'db_tasks';

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
    //   .insertOne({ name: 'Don', age: 32 })
    //   .then((result, error) => {
    //     if (error) return console.log('Unable to insert document');
    //     console.log(result);
    //   });


    // CREATE - Inserting many objects into the users collection
    // db.collection('users')
    //   .insertMany([
    //     { name: 'Don', age: 32 },
    //     { name: 'John', age: 30 },
    //   ])
    //   .then((result, error) => {
    //     if (error) return console.log('Unable to insert document');
    //     console.log(result.insertedIds);
    //   });

    db.collection('tasks')
      .insertMany([
        { description: 'start studying Node', completed: true },
        { description: 'start studying React', completed: false },
        { description: 'start studying English again', completed: false },
      ])
      .then((result, error) => {
        if (error) return console.log('Unable to insert document');
        console.log(result.insertedIds);
      });
  }
);
