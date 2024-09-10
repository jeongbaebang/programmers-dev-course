import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRoutes from './routes/v1/userRoutes';
import { connectDB } from './database';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// DB연결
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
  console.log(`http://localhost:3000`);
});
