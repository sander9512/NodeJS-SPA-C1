var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var authroutes_v1 = require('./routes/authentication.routes.v1');
var sporthalroutes_v1 = require('./routes/sporthalhuren.routes.v1');
var maintenanceroutes_v1 = require('./routes/maintenance.routes.v1');
var closingdayroutes_v1 = require('./routes/closingDay.routes.v1');
var workingdayroutes_v1 = require('./routes/workingDay.routes.v1');
var userroutes_v1 = require('./routes/user.routes.v1');

var config = require('./config/env/env');

var mongodb = require('./config/mongo.db');

var app = express();
module.exports = {};

app.use(bodyParser.urlencoded({
  'extended' : 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app.set('port', (process.env.PORT | config.env.webPort));
app.set('env', (process.env.ENV | 'development'));

app.use(logger('dev'));

// CORS headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN || 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//Routes
app.use('/api/v1', sporthalroutes_v1);
app.use('/api/v1', authroutes_v1);
app.use('/api/v1', maintenanceroutes_v1);
app.use('/api/v1', closingdayroutes_v1);
app.use('/api/v1', workingdayroutes_v1);
app.use('/api/v1', userroutes_v1);

// error handler express-jwt errors
app.use(function (err, req, res, next) {
    var error = {
        message: err.message,
        code: err.code,
        name: err.name,
        status: err.status
    }
    res.status(401).send(error);
});

app.use('*', function(req, res) {
  res.status(400);
  res.json({
    'error' : 'Waarom kijk jij op deze route?'
  });
});

app.listen(config.env.webPort, function () {
    console.log('De server luistert op port ' + app.get('port'));
    // console.log('Zie bijvoorbeeld http://localhost:3000/api/...');
});

module.exports = app;
