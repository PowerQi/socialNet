"use strict";

require.config({
  paths: {
    jQuery: '/bower_components/jquery/dist/jquery',
    Underscore: '/bower_components/underscore/underscore',
    Backbone: '/bower_components/backbone/backbone',
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