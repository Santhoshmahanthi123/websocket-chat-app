require('dotenv').config();
//Make Connection
const port = process.env.PORT | 3000;
const socket = io.connect(port);
//Query DOM
const message = document.getElementById('message');
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');
//Adding event listener to the button

btn.addEventListener('click',()=>{
   //this tells about the name of the message and data of the message is to be sent
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
});

//Listen for the events on front end

socket.on('chat',(data)=>{
    feedback.innerHTML ="";
output.innerHTML +='<p><strong>'+ data.handle +':</strong>' + data.message +'</p>'
});
socket.on('typing',(data)=>{
    feedback.innerHTML = '<p><em>' + data +' is typing a message...</em></p>';
})