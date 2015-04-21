url = require 'url'
JsHandler = new require('./jsHandler.coffee')
FileHandler = new require('./fileHandler.coffee')

class Application 
    constructor: (@req, @res) ->
        @pathname = url.parse(@req.url, true)
    process: ->
        if /\/javascripts\//.test(@pathname.pathname) 
            handler = new JsHandler(@req, @res, @pathname)
        else 
            handler = new FileHandler(@req, @res, @pathname)
        handler.process(handler.pathname())
module.exports = Application