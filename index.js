const express = require('express');
const socket = require('socket.io');
//set up express app
const app = express();
var server = app.listen(3030,()=>
console.log("listening to server on port:3030"));
//static files
app.use(express.static('public'));
 //Setting up the socket to the back end express server
const io = socket(server);
//When every client connects to socket this function gets executed
io.on('connection',(socket)=>{
    //socket.id gives the unique id every time new user connects to the socket
    console.log("A user connected!",socket.id);
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('A user disconnected!',socket.id);
      });
    
});
