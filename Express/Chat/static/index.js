$(document).ready(function() {
    //Set up socket
    var socket = io.connect();
    //Event listener for chat input.
    $('button').click(function(){
        sendMessage();
    });
    $('input').keydown(function(e) {
        if (e.keyCode === 13) {
            sendMessage();
        }
    });

    //Get username for new connection.
    var username;
    //Simple validation -- user must enter a name.
    while (!username) {
        username = prompt("Enter chat username:");
    }
    //Send login information.
    socket.emit("login", {username: username});
    
    //New user logs into chat.
    socket.on('new_user', function(data) {
        $('.card').append(`<p class="myalert">${data}</p>`);
    });
    //User leaves chat.
    socket.on('logout', function(data) {
        $('.card').append(`<p class="myalert">${data}</p>`);
    })
    //User sends message.
    socket.on('message_received', function(message) {
        $('.card').append(message);
    })

    function sendMessage() {
        var text = $('input').val();
        if(text) {
            var message = `<p><span class="green">${username}</span>: ${text}</p>`
            socket.emit('message_sent', message);
            $('input').val('');
        } else {
            console.log("No text entered.")
        }
    }

});