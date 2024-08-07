import 'dotenv/config';
import express from 'express';
import { join } from 'path';
import { connect, Schema, model } from 'mongoose';
import pkg from 'async-wave';
import bodyParser from 'body-parser';
const { asyncWave } = pkg;
import route from './routes/userRoutes.js';

const PORT = process.env.PORT || 8000;
const connectDB = async () => {
  const DB_URI = process.env.MONGO_DB;

  try {
    const mongooseInstance = await connect(DB_URI);

    if (mongooseInstance) {
      console.log('DB Connected!');
    } else {
      throw new Error('Could not connect');
    }
  } catch (e) {
    console.error('에러발생!');
  }
};
const app = express();

// DB 서버 연결
asyncWave([connectDB]);

app.use(express.static('public'));
app.use(bodyParser.json());

// 라우터
app.use('/user', route);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/movie', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'movie', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
