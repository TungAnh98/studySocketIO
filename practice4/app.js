var io = require('socket.io')(8088);
io.on('connection', (socket) => {
    socket.on('ferret', function (name, fn) {
        fn('a ma thoi');
    });

    socket.broadcast.emit('user connected');

});