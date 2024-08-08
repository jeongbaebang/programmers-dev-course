const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const data = {
    title: 'Hello, EJS!',
    message: 'EJS를 사용하여 동적 페이지를 생성해보세요!',
    arr: [1, 2, 3, 4, 5, 6, 7],
    obj: {
      apple: 1000,
    },
    people: [{ name: 'kim1' }, { name: 'kim2' }, { name: 'kim2' }],
    tasks,
    users2: [
      { name: 'kim', age: 17, role: 'front' },
      { name: 'lee', age: 25, role: 'back' },
      { name: 'park', age: 30, role: 'full' },
      { name: 'choi', age: 16, role: 'front' },
    ],
  };

  res.render('index', data);
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('result', { name, email });
});

let tasks = [];

app.post('/addTask', (req, res) => {
  const newTask = req.body?.newTask ?? 'no Data';

  tasks.push(newTask);

  res.redirect('/');
});

app.post('/deleteTask', (req, res) => {
  const deleteTask = req.body?.deleteTask ?? 'no Data';

  console.log(deleteTask);
  tasks = tasks.filter((task) => task !== deleteTask);

  res.redirect('/');
});

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
