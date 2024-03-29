var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 4200;

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });



app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

 io.on('connection', function(socket){
   console.log('a user connected');
  });
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  })
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });

http.listen(4200, function(){
  console.log('listening on *:4200');
});

