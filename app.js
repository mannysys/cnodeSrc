var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('ejs-mate');
var config = require('./config'); //引人自定义配置文件

//var routes = require('./routes/index');
//var users = require('./routes/users');
var webRouter = require('./routes/web_router');

var app = express();

// 设置视图模板引擎
app.engine('html',engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//如果碰到静态文件前缀public就路由到public目录下
app.use('/public',express.static(path.join(__dirname, 'public')));


/*
 locals是个对象(也是变量)是贯穿在我们整个应用程序生命周期的
 这个对象中属性，在我们整个视图层可以访问到的
 */
app.locals.config = config;
//app.use('/', routes);
//app.use('/users', users);

app.use('/', webRouter); //用户登录和注册路由加入中间价




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
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
