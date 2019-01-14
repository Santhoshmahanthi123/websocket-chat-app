require('dotenv').config();
const express = require('express');
const socket = require('socket.io');
const port = process.env.PORT;
//set up express app
const app = express();
var server = app.listen(port,()=>
console.log(`listening to server on port:${port}`));
//static files
app.use(express.static('public'));
 //Setting up the socket to the back end express server
const io = socket(server);
//When every client connects to socket this function gets executed
io.on('connection',(socket)=>{
    //socket.id gives the unique id every time new user connects to the socket
    console.log("New user connected!",socket.id);
   //socket listening to the data when it is sent by the user
    socket.on('chat',(data)=>{
      //reffering to all the sockets that are connected in different browsers
        io.sockets.emit('chat',data);  
    });
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('User disconnected!',socket.id);
      });
    
});