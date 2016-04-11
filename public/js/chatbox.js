(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#send_message').submit(function(){
        // socket.emit sends out chat message events with attached data. In this case the submitted form data from #user.input
        socket.emit('chat message', $('#user_input').val());
        $('#messages').append($('<li>').text($('#user_input').val()));
        $('#user_input').val('');
        
        return false;
    });
/*
    $('#send_message').submit(function(){
        console.log("Before socket.emit newsfeeds");
        socket.emit("newsfeed", function(data) {
        console.log("After socket.emit newsfeeds");
        var parsedData= socket.request.session.passport.user;
        // grab and parse data and assign it to the parsedData variable.
        console.log(parsedData);
        // other possible solution(s) here.
        $('#messages').append($('.chat').html(messageTemplate(parsedData)));
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
    });
    */
  
   
   
})($);
