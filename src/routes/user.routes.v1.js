var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const User = require('../models/user');
const webUrl = 'http://localhost:3000/api/v1/';

routes.get('/staff', function(req, res) {
  res.contentType('application/json');
  var query = User.find({ 'role': 'Personeel'});

  User.find(query)
    .then((staff) => {
      res.status(200).json(staff);
    })
    .catch((error) => res.status(400).json(error));
});


routes.get('/staff/:hallId', function(req, res) {
  res.contentType('application/json');
  var query = User.find({ 'hallID': req.params.hallId,
  'role': 'Personeel'});

  User.find(query)
    .then((staff) => {
      res.status(200).json(staff);
    })
    .catch((error) => res.status(400).json(error));
});

module.exports = routes;
