const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname);

app.use(express.static(publicDir, { extensions: ['html'] }));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/donate', (req, res) => {
  res.sendFile(path.join(publicDir, 'pages', 'donate.html'));
});

app.get('/pages/donate.html', (req, res) => {
  res.redirect(301, '/donate');
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Rhea Foundation app running: http://localhost:${PORT}`);
});
