import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const rooms = new Set();

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  socket.on('joinRoom', (room) => {
    socket.join(room);

    rooms.add(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('chat message', ({ room, message }) => {
    io.to(room).emit('chat message', message);
    console.log(`Message sent to room ${room}: ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
