(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#send_message').submit(function(){
        // socket.emit sends out chat message events with attached data. In this case the submitted form data from #user.input
        socket.emit('chat message', $('#user_input').val());
        $('#user_input').val('');
        //$('#messages').append($('<li>').text($('#user_input').val()));
        var parsedData= socket.request.session.passport.user;
        console.log("hello");
         $('#messages').append($('<li>').html(messageTemplate(parsedData)));
    return false;
         // grab and parse data and assign it to the parsedData variable.
        //updating new message
        function messageTemplate(template) {
        var result = '<div class="user">' +
            '<div class="user-image">' +
            '<img src="' + template.photo + '" alt="">' +
            '</div>' +
            '<div class="user-info">' +
            '<span class="username">' + template.username + '</span><br/>' +
            '<span class="posted">' + template.posted + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="message-content">' + $('#user_input').val() +
            '</div>';

            return result;
        }
    });
    socket.on('new message', function(msg){
        
        //var parsedData= socket.request.session.passport.user;
        console.log('hello');
        $('#messages').append($('<li>').text(msg));
        //$('#messages').append($('<li>').html(messageTemplate(parsedData)));

        function messageTemplate(template) {
        var result = '<div class="user">' +
            '<div class="user-image">' +
            '<img src="' + template.photo + '" alt="">' +
            '</div>' +
            '<div class="user-info">' +
            '<span class="username">' + template.username + '</span><br/>' +
            '<span class="posted">' + template.posted + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="message-content">' + msg +
            '</div>';
        return result;
        }
   
    });
   
   
})($);
