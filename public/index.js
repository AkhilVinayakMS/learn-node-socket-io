var socket=io();

socket.on('connect',function(){
    console.log('connected to server')
    socket.emit('createEmail',{
        to:'bob'
    })
})
socket.on('disconnect',function(){
    console.log('disconnecte from server');
}) 


socket.on('newEmail',(data)=>{
    console.log('new Email had arrived from' + data.from )
})