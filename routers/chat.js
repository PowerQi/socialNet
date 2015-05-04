module.exports = function(app, models){
    var io = require("socket.io");
    var utils = require('express/node_modules/connect/lib/utils');// require("connect").utils;
    var cookie = require("cookie");
    var Session = require("express-session").Session;
    
    var sio = io.listen(require('http').Server(app));
    //var server = require('http').Server(app);
    //var sio = require('socket.io')(server);
    
    sio.configure(function(){
        app.isAccountOnline = function(accountId) {
          var clients = sio.sockets.clients(accountId);
          return (clients.length > 0);
        };
        
        sio.set('authorization', function(data, accept){
            console.log(data);
            var signedCookies = cookie.parse(data.headers.cookie);
            var cookies = utils.parseSignedCookies(signedCookies, app.sessionSecret);
            console.log(cookies);
            data.sessionID = cookies['express.sid'];
            data.sessionStore = app.sessionStore;
            data.sessionStore.get(data.sessionID, function(err, session){
                if(err || !session){
                    return accept('Invalid session', false);
                }else {
                    data.session = new Session(data, session);
                    accept(null, true);
                }
            })
        })
    });
    
    sio.sockets.on('connection', function(socket){
        console.log(socket);
        var session = socket.handshake.session;
        var accountId = session.accountId;
        socket.join(accountId);
        socket.on('chatclient', function(data) {
            sio.sockets.in(data.to).emit('chatserver', {
                from: accountId,
                text: data.text
            });
        });
    });
}