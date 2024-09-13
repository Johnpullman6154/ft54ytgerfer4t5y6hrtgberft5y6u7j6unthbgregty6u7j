const socket = io();

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    if (message) {
        socket.emit('chat message', message);
        document.getElementById('message-input').value = '';
    }
});

socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    document.getElementById('chat-messages').appendChild(messageElement);
});
