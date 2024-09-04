const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-connected', socket.id);
  });

  socket.on('call-user', (data) => {
    io.to(data.userToCall).emit('call-made', {
      signal: data.signal,
      from: data.from,
    });
  });

  socket.on('make-answer', (data) => {
    io.to(data.to).emit('answer-made', {
      signal: data.signal,
      to: data.to,
    });
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
