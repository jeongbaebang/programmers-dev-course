import { io } from 'socket.io-client';

import './style.css';

const socket = io('http://localhost:3000');

const form = document.getElementById('form');
const input = document.getElementById('input') as HTMLInputElement;
const messages = document.getElementById('messages');
const button = document.getElementById('setRoom');
const roomText = document.getElementById('roomText') as HTMLHeadingElement;

let room: string;

if (!form || !input || !messages || !button) {
  throw new Error('Invalid Tag');
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  room = prompt('방 입력') as string;

  roomText.innerHTML = `Room ${room}`;
  socket.emit('joinRoom', room);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value) {
    socket.emit('chat message', { room, message: input.value });
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
