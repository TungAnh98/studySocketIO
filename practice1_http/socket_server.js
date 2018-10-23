var http = require('http');
server = http.createServer();
ip = '127.0.0.1';
port = 8080;
socketIO = require('socket.io');
io = socketIO.listen(server);
server.listen(port,ip,()=>{
    console.log('Waiting at port %s',port);
});

var run =   (socket)=>{
    socket.emit('greeting',"Putang ina mo");

    
}

io.sockets.on('connection',run);