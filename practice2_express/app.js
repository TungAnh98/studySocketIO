var app = require('express')();
var server = require('http').Server(app);
var io  = require('socket.io') (server);

server.listen(8080,()=>{
    console.log('Listening at port %s',8080);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});


var  run = (socket)=>{
    socket.emit('greet','Putang Inamo Bobo');
    socket.on('introduce',(data)=>{
        console.log('Hello '+ data);
    });
};

io.on('connection',run);