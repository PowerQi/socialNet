var express = require("express");
var app = express();
var nodemailer = require('nodemailer');
var fs = require("fs");
var MemoryStore = express.session.MemoryStore;
var dbPath = "mongodb://localhost/nodebackbone";


// Import the data layer
var mongoose = require('mongoose');
var config = {
	mail: require('./config/mail').mailConfig()
};

// Import the accounts
var models = {
	Account: require('./models/Account')(config, mongoose, nodemailer)
};

app.configure(function(){
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
	app.use(express.limit('1mb'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({
		secret: "SocialNet secret key",
		store: new MemoryStore(),
		key: 'express.sid'
	}));
	mongoose.connect(dbPath, function onMongooseError(err){
		if(err) throw err;
	});
});

// Import the routes
fs.readdirSync('routers').forEach(function(file) {
  if ( file[0] == '.') return;
  var routeName = file.substr(0, file.indexOf('.'));
  require('./routers/' + routeName)(app, models);
});

app.get('/', function(req, res){
	res.render('index.jade');
});

//$IP and $PORT
app.listen(process.env.PORT);
console.log('express listening on port:'	 + process.env.PORT );

