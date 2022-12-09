const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!!');
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  note
    ? console.log(`Title: ${note.title} \n Body: ${note.body}`)
    : console.log('Note not found!');
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  notes.length > notesToKeep.length
    ? console.log('Note remmoved!')
    : console.log('No note found!');
  saveNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log('Your notes...');
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
