// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080);
io.on('connection',  (client)=> {
    console.log('Client connected...');

    client.on('join',  (data) =>{
        console.log(data);
        client.emit('messages', 'Hello from server');
    });
});
