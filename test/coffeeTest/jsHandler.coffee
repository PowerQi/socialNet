fs = require 'fs'
Handler = require './handler.coffee'
CoffeeScript = require('coffee-script')

module.exports = class JsHandler extends Handler
    contentType: ->
        "application/x-javascript"
            
    pathname: ->
        file = errorEvent.run =>
                console.log "extrace pathname: #{@pathInfo.pathname}"
                (/\/javascripts\/(.+)\.js$/.exec(@pathInfo.pathname))[1]
        return "#{file}.coffee"
        
    process: ()->
        console.log "#{@pathname()}"
        fs.readFile "./src/#{@pathname()}", "utf-8", (err, data)=>
            if err?
                @write("ooops!, 404", 404)
            else 
                @write(CoffeeScript.compile(data))
        