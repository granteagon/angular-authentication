/*global node:true */

var express = require('express'),
  app = express(),
  port = 3000;

app.configure(function () {
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/', express['static'](__dirname + '/public'));
  app.use('/components/angular-authentication', express['static'](__dirname + '/src'));
  app.use('/components', express['static'](__dirname + '/components'));
});

app.configure('development', function () {
  app.use(express.logger('dev'));

  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.listen(port, function () {
  console.log('Starting server on port ' + port);
  console.log('Server is running in ' + app.settings.env + ' mode.');
});