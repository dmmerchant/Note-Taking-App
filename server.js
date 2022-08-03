const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const { mware } = require('./middleware/mware');

const app = express();
const PORT = 3001;

app.use(mware)

app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
