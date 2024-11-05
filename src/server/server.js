// server/server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Endpoint to serve the JSON file
app.get('/api/db', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'db.json');

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load data' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  });
});

// Serve the React app
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
