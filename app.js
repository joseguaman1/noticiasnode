//llave firbase AIzaSyAqJaMcDuzph49z-s1vTmme-ITdkdaT0Pk
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nib = require('nib');
var stylus = require('stylus');
var session = require('express-session');
var admin = require('firebase-admin');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

admin.initializeApp({
    credential: admin.credential.cert("noticias-e4499-43078100b30a.json"),
    databaseURL: "https://noticias-e4499.firebaseio.com"
});

var db, db_address, mongoose;
mongoose = require("mongoose");
db_address = "127.0.0.1:27017/noticias1";

mongoose.connection.on("open", function(ref) {
  return console.log("Connected to mongo server!");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server! "+ err);
  return console.log(err.message.red);
});

try {
  mongoose.connect("mongodb://" + db_address);
  db = mongoose.connection;
  console.log("Started connection on " + ("mongodb://" + db_address).cyan + ", waiting for it to open...".grey);
} catch (err) {
  console.log(("Setting up failed to connect to " + db_address).red, err.message);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//console.log(path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'sf-4354-uure-4',
  resave: true,
  saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
