"use strict";

require.config({
  waitSeconds: 2000,
  paths: {
    jQuery: '/bower_components/jquery/dist/jquery',
    Underscore: '/bower_components/underscore/underscore',
    Backbone: '/bower_components/backbone/backbone',
    Sockets: 'https://socialnet-powerqi-2.c9.io:8080/socket.io/socket.io', //由express初始化，直接调用
    models: 'models',
    text: '/js/libs/text',
    templates: '../templates',
    socialNet: '/js/socialNet',
    SocialNetView: '/js/SocialNetView'
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'SocialNet': ['Backbone']
  }
});

require(['socialNet'], function(SocialNet) {
  SocialNet.initialize();
});