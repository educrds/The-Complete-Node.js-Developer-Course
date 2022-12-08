const fs = require('fs');

fs.writeFileSync('note.txt', 'Ola, meu nome é Eduardo e tenho 21 anos.');

// Challenge 01 : Append a message to notes.txt

fs.appendFileSync('note.txt', ' E estou aprendendo NodeJs.');
