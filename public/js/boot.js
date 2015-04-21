"use strict";

require.config({
  waitSeconds: 2000,
  paths: {
    jQuery: '/bower_components/jquery/dist/jquery',
    Underscore: '/bower_components/underscore/underscore',
    Backbone: '/bower_components/backbone/backbone',
    models: 'models',
    text: '/js/libs/text',
    templates: '../templates',
    socialNet: '/js/socialNet',
    SocialNetView: '/js/SocialNetView',
    Sockets: '/socket.io/socket.io'
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'SocialNet': ['Backbone']
  }
});

require(['socialNet'], function(SocialNet) {
  SocialNet.initialize();
});