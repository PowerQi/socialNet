http = require('http')
Application = require('./application.coffee')

port = process.env.PORT
ip = process.env.IP

server =  http.createServer (req, res) ->
  app = new Application(req, res)
  app.process()
  return 

server.listen(port, ip)

console.log "server running at http://#{ip}:#{port}"