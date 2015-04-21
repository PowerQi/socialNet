domain = require 'domain'
events = require 'events'

d = domain.create()
d.on 'error', (e)->
    console.log 'path error in domain', e   


module.exports = d;