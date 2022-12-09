const chalk = require('chalk');
const getNotes = require('./notes');
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
  handler: (argv) => {
    const { title, body } = argv;
    console.log(chalk.bgGreen(`Title: ${title}`));
    console.log(chalk.bgYellow(`Body: ${body}`));
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
    },
    body: {
      describe: 'Note body',
      demandOption: true,
    },
  },
  handler: () => {
    console.log('Removing a note...');
  },
});

// listen command
yargs.command({
  command: 'listen',
  describe: 'Listen your notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler: (argv) => {
    console.log('Listening out all notes...', argv);
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
    },
  },
  handler: () => {
    console.log('Reading a note...');
  },
});

yargs.parse();
