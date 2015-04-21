module.exports = ->
    @greet = (status, @name = status) ->
        if status == "drunk" then "bonjour, mon nom est #{@name}" else "hello, my name is #{@name}"
    return