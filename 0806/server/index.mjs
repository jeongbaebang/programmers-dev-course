import express from 'express';
import path from 'path';
import fs from 'fs';
import async from 'async';

const users = [
  { name: 'kim1', email: 'kim1@gmail.com' },
  { name: 'kim2', email: 'kim2@gmail.com' },
  { name: 'kim3', email: 'kim3@gmail.com' },
  { name: 'kim4', email: 'kim4@gmail.com' },
  { name: 'kim5', email: 'kim5@gmail.com' },
  { name: 'kim6', email: 'kim6@gmail.com' },
  { name: 'kim7', email: 'kim6@gmail.com' },
  { name: 'kim8', email: 'kim6@gmail.com' },
  { name: 'kim10', email: 'kim6@gmail.com' },
];

const PORT = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, +'index.html'));
});

app.get('/greet', (req, res) => {
  res.send(JSON.stringify({ message: 'Hello' }));
});

app.get('/users', (req, res) => {
  res.send(JSON.stringify(users));
});

app.get('/movie', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'movie.html'));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
