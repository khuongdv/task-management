var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// List filter
var routes = require('./routes/index');
var users = require('./routes/users');
var sched = require('./routes/scheduledtasks');
var tasks = require('./routes/tasks');
var filter = require('./routes/filter');
var login = require('./routes/login');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('*', filter);
app.use('/', routes);
app.use('/users', users);
app.use('/scheduled', sched);
app.use('/tasks', tasks);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({Status:false, Message: "URI not found", Error: err});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.json({Status:false, Message: "URI not found"});
});


module.exports = app;
