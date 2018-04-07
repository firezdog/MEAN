$(document).ready(function() {
    var socket = io.connect();
    socket.on('first_connect', function(data) {
        $("#counter").text(data.pushed);
    });
    socket.on('button_push', function(data) {
        $("#counter").text(data.pushed);
    });
    $('#add').click(function(){
        socket.emit("add_push", {});
    });
    $('#reset').click(function(){
        socket.emit("reset_push", {});
    });
});