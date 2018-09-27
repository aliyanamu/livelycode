require('dotenv').config();

const createError = require('http-errors'),
      express = require('express'),
      path = require('path'),
      app = express(),
      cors = require('cors'),
      jwt = require('jsonwebtoken'),
      bodyParser= require('body-parser');

const indexRouter = require('./routes/index'),
      usersRouter = require('./routes/users'),
      tweetsRouter = require('./routes/tweets');

//Connecting to Mongoose
const mongoose   = require('mongoose'),
      url = `mongodb://localhost:27017/lively-code`
      // url = `mongodb://illion01:illion01@ds115963.mlab.com:15963/lively-code`

console.log('ready to test our server')
mongoose.connect(url,{ useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tweets', tweetsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
