// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
// const MongoClient = require('mongodb').MongoClient
//
// var db
//
// MongoClient.connect('mongodb://admin:medlytics123@ds143603.mlab.com:43603/medlytics', { useNewUrlParser: true },(err, client) => {
//   if (err) return console.log(err)
//   db = client.db('medlytics') // whatever your database name is
//   console.log(db)
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//     console.log(db.collection("customers").find())
//   })
// })
//
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static('public'))
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
const express = require('express')
const app = express()
var path = require('path');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const initializeDatabases = require('./dbs')

const routes = require('./routes')

app.use(express.static('public'))
initializeDatabases().then(dbs => {
 // Initialize the application once database connections are ready.
 routes(app, dbs).listen(3000, () => console.log('Listening on port 3000'))
}).catch(err => {
 console.error('Failed to make all database connections!')
 console.error(err)
 process.exit(1)
})
