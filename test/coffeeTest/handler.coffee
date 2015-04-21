
module.exports = class Handler
    constructor: (@req, @res, @pathInfo)->
        
    contentType: ->
        throw new Error 'must be implemented!'
    
    process: ->
        throw new Error 'must be implemented!'
        
    pathname: ->
        pathInfo.pathname
        
    write: (data, status = 200, headers = {}) ->
        headers['contentType'] ||= @contentType()
        headers['contentLength'] ||= Buffer.byteLength data
        @res.writeHead(status, headers)
        @res.write(data, 'utf-8')
        @res.end
            
        