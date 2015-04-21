socialNet
=========
this is a coffeescript appsssssss

========
start mongodb server: ./mongod
mongodb console: mongo

=========
if mongodb throws error: Unclean shutdown detected mongodb
execute option: mongod --repair --dbpath data

=========
make compiler
make pack
mocha use coffee-script add --compilers option to mocha.opts
--compilers coffee:coffee-script/register