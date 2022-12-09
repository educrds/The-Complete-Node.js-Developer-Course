const fs = require('fs');

// fs.writeFileSync('json.json', "{name: 'Andrew', planet: 'Earth', age: 27}");

const fileRead = fs.readFileSync('json.json');
const fileString = fileRead.toString();
const data = JSON.parse(fileString);

data.name = 'Joao';
data.planet = 'Earth';
data.age = 41;

const userJSON = JSON.stringify(data)
fs.appendFileSync('json.json', userJSON)
