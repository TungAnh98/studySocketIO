var app= require('express')();
var http  = require('http').Server(app);
var io =require('socket.io')(http);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html');
})

http.listen(8080,()=>{
    console.log("listen in port 8080");
})

var run = (socket)=>{
    console.log('a user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
 
    socket.broadcast.emit('hi');
    
};

io.on('connection',run);
