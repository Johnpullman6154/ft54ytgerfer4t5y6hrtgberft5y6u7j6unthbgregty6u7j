const socket = io();

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        socket.emit('login', username);
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
    }
}

function sendMessage() {
    const message = document.getElementById('messageInput').value;
    if (message) {
        socket.emit('message', message);
        document.getElementById('messageInput').value = '';
    }
}

socket.on('message', (data) => {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${data.username}: ${data.message}`;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
});
