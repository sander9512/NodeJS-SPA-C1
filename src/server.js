var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');
var logger = require('morgan');

var config = require('./config/env/env');

var app = express();

app.use(bodyParser.urlencoded({
  'extended' : 'true'
}));
app.use()
