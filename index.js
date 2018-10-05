const express = require('express');
//set up express app
const app = express();
var server = app.listen(3030,()=>
console.log("listening to server on port:3030"));
//static files
app.use(express.static('public'));