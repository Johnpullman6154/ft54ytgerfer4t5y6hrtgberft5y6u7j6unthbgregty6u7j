const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    let username = '';

    socket.on('login', (name) => {
        username = name;
    });

    socket.on('message', (message) => {
        io.emit('message', { username, message });
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
