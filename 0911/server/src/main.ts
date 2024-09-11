import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import './config/database';
import userRoutes from './routes/v1/userRoutes';
import { connectDB, MongooseDatabase } from './config/database';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

connectDB(new MongooseDatabase());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
  console.log(`http://localhost:3000`);
});
