var express = require('express');
const { Server } = require('http');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(8080, function () {
  console.log('listening on port http://localhost:8080');
});

var io = require('socket.io')(http);

io.on('connection', function (socket) {
  console.log('new connection');

  // Called when the client calls socket.emit('move')
  socket.on('move', function (msg) {
    socket.broadcast.emit('move', msg);
  });
});




io.on('connection', function(socket) {
  console.log('new connection');
  socket.on('move', function(msg) {
  socket.broadcast.emit('move', msg);
  });
  });