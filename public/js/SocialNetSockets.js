define(['Sockets', 'models/contactCollection', 'views/chatView'], function(io, ContactCollection, ChatView){
    var SocialNetSockets = function(eventDispatcher){
        var socket = null;
        
        var connectSocket = function(){
            socket = io.connect().socket;
            
            socket
            .on('connect_failed', function(reason){
                console.error('unable to connect', reason);
            })
            .on('connect', function(){
                console.info('successfully established a connection');
                eventDispatcher.bind('socket:chat', sendChat);
                socket.on('chatserver', function(data){
                    eventDispatcher.trigger('socket:chat:start:' + data.from);
                    eventDispatcher.trigger('socket:chat:in:' + data.from, data);
                });
                var contactCollection = new ContactCollection();
                contactCollection.url = '/accounts/me/contacts';
                new ChatView({
                    collection: contactCollection,
                    socketEvents: eventDispatcher   
                }).render();
                contactCollection.fetch();
            });
        };
        
        var sendChat = function(payload){
            if( null != socket){
                socket.emit('chatclient', payload);
            }
        };
        
        eventDispatcher.bind('app:loggedin', connectSocket);
    }
    
    return {
        initialize: function(eventDispatcher){
            SocialNetSockets(eventDispatcher);
        }
    };
});