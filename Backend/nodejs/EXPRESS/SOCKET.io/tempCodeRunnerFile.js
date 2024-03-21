
const express=require('express');
const app=express();
const path=require('path');
const{Server}=require('socket.io');
const http=require('http');
const server=http.createServer(app);
const io=new Server(server);

app.get('/',(req,res)=>{
res.sendFile('prac.html',{root:(__dirname)});
});
// app.use(express.static(__dirname+'/public'));
io.on('connection',(socket)=>{
    socket.on('user-msg',(message)=>{
        console.log(message);
        // socket.broadcast.emit('message',message);
        io.emit('message',message);
    })
    socket.on('disconnect',()=>{
        console.log("user disconnected");
    })
})

server.listen(3000);