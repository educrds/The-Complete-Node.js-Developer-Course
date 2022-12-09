const { addNote, removeNote, getNotes, listNotes, readNote } = require('./notes.js');
const yargs = require('yargs');

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    const { title, body } = argv;
    addNote(title, body);
  },
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
    }
  },
  handler(argv) {
    const { title } = argv;
    removeNote(title);
  },
});

// listen command
yargs.command({
  command: 'listen',
  describe: 'Listen your notes',
  handler(){
    listNotes()
  },
});

// read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type:'string'
    },
  },
  handler(argv) {
    const { title, body } = argv;
    readNote(title, body)
  },
});

yargs.parse();
