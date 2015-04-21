fs = require 'fs'
Handler = require './handler.coffee'

module.exports = class FileHandler extends Handler
    contentType: ->
        postfix = errorEvent.run =>
                    (/\.(.*)/.exec(@pathname()))[1].toLowerCase()
        switch postfix
            when "jpg", "png", "jpeg", "gif"
                "img/#{postfix}"
            when "css"
                "text/css"
            else
                "text/html"
            
    pathname: ->
        unless @_pathname
            if @pathInfo.pathname is "/" or @pathname.pathname is ""
                @pathInfo.pathname = "index"
            unless /\..+$/.test @pathInfo.pathname
                @pathInfo.pathname += "html"
            @_pathname = @pathInfo.pathname
        return @_pathname
        
    process: ->
        console.log "public#{@pathname()}"
        fs.readFile "public#{@pathname()}", "utf-8", (err, data)=>
            if err?
                @write("ooops!, 404", 404)
            else 
                @write data
        