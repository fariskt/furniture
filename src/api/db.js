// api/db.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const jsonFilePath = path.join(process.cwd(), 'src', 'db.json');

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to load data' });
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  });
}
