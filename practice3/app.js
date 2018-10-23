// note, io(<port>) will create a http server for you
var io = require('socket.io')(8088);

io.on('connection', function (socket) {
  io.emit('this', { will: 'be received by everyone'});

  socket.on('private message', function (from, msg) {
    console.log('From server,I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
   console.log('Thg kia nó tắt rồi');
  });
});