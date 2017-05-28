// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var bodyParser = require("body-parser");

// var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect("mongodb://heroku_tthbc9rj:am4h70q0bauhhhjmb439jurchq@ds155411.mlab.com:55411/heroku_tthbc9rj"); // connect to our database

require('./config/passport')(passport); // pass passport for configuration



	// set up our express application

	app.use(express.cookieParser()); // read cookies (needed for auth)
	// app.use(express.bodyParser()); // get information from html forms
	// app.engine("html", require("ejs").renderFile)
	// app.set('engine', 'html'); // set up ejs for templating
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + 'public'));

	// required for passport
	app.use(express.session({ secret: 'Kwaku' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session



// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/api-routes.js')(app, passport);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
