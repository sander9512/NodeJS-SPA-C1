var express = require('express');
var routes = express.Router();
var request = require('request');
var User = require('../models/user');

const webUrl = 'http://localhost:3000/api/v1/';

// registreer een user
routes.post('/register', function(req, res) {
  res.contentType('application/json');
  let user = new User(req.body);

  user.save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => res.status(400).json(error));
});

module.exports = routes;
