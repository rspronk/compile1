var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var less = require('./routes/less');
var scss = require('./routes/scss');
var sass = require('./routes/sass');
var stylus = require('./routes/stylus');
var jade = require('./routes/jade');
var haml = require('./routes/haml');
var markdown = require('./routes/markdown');
var coffeescript = require('./routes/coffeescript');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use('/api/less', less);
app.use('/api/scss', scss);
app.use('/api/sass', sass);
app.use('/api/stylus', stylus);
app.use('/api/jade', jade);
app.use('/api/haml', haml);
app.use('/api/markdown', markdown);
app.use('/api/coffeescript', coffeescript);

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
    res.json('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
