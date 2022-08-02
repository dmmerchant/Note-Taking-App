const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');


const app = express();

// /api

app.use('/notes', notesRouter); // /api/notes/

module.exports = app;