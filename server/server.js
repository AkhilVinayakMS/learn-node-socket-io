const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;
const http = require('http');
const socketIO = require('socket.io');  //1


var app = express();//2
var server = http.createServer(app);//3

var io = socketIO(server) //4
io.on('connection', function (socket) {   //important - check usage
    console.log('new user connected');
    socket.emit('newEmail' ,{
      from:'alwin',
      time:'10.30'  
    }) // you should use the same name in client

    socket.on('createEmail',(data)=>{
        console.log(`create email event  & it is to: ${data.to}`)
    })

    socket.on('disconnected', () => {
        console.log('user was disconnected')
    })

})

app.use(express.static(publicPath))

server.listen(port, () => {    //added server instad of app
    console.log(`server is up on ${port}`)
})

