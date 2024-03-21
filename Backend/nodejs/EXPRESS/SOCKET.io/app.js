// const express=require('express');
// const path=require('path');
// const http=require('http');
// const {Server}=require('socket.io');
// // const { Socket } = require('dgram');

// const app=express();
// const server=http.createServer(app);
// const io=new Server(server);

// app.get('/',(req,res)=>{
//     res.sendFile('index.html',{root:path.join(__dirname)});
// })

// io.on('connection',(socket)=>{
//     // console.log("a user connected");
//     socket.on('user-msg',(message)=>{
//         console.log("A new User Message ",message);
//         // io.emit('message',message);
//         socket.broadcast.emit('message', message);
//     })
// })

// server.listen(3000,()=> console.log("server running at port 3000"));



const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = {}; // Store connected users and their names

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname) });
});

io.on('connection', (socket) => {
    socket.on('user-join', (username) => {
        users[socket.id] = username;
        console.log(`${username} joined the chat`);
    });

    socket.on('user-msg', (message) => {
        const sender = users[socket.id];
        console.log(`${sender}: ${message}`);
        // Broadcast the message to all connected clients except the sender
        socket.broadcast.emit('message', { sender, message });
    });

    socket.on('disconnect', () => {
        const username = users[socket.id];
        console.log(`${username} left the chat`);
        delete users[socket.id];
    });
});

server.listen(3001, () => console.log('Server running at port 3001'));
