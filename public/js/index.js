var socket = io();

socket.on('connect',function () {
    console.log('Connected to server')

})

socket.on('disconnect',function () {
    console.log('Disconnected from server')
})

socket.on('newMessage',function(message) {
    console.log('new Message has arrived',message)
})

socket.on('welcomeMessage', function(message) {
    console.log(message);
})