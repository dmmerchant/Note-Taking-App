const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// Used UUID to ensure a univerally unique identifier
const { v4: uuid } = require('uuid')


// GET Route for all notes
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });


// POST Route to create a new note
notes.post('/', (req, res) => {
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note added successfully.`);
    } else {
      res.error('Error in adding note');
    }
  });
  
// DELETE Route for a specific note
notes.delete('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== noteId);
      writeToFile('./db/notes.json', result);
      res.json(`Item ${noteId} has been deleted.`);
    });
});


  module.exports = notes;