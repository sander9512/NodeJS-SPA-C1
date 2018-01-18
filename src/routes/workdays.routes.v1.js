var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const Workday = require('../models/workday');
const webUrl = 'http://localhost:3000/api/v1/';

//Vind alle werkdagen
routes.get('/workdays', function(req, res) {
    res.contentType('application/json');
    Workday.find({})
        .then((workdays) => {
            res.status(200).json(workdays);
        })
        .catch((error) => res.status(400).json(error));
});

routes.get('/workdays/userId', function(req, res) {
  res.contentType('application/json');
  var query = Workday.find({ 'userId': req.params.userId });

  User.find(query)
    .then((workdays) => {
      res.status(200).json(workdays);
    })
    .catch((error) => res.status(400).json(error));
});

routes.post('/workdays', function(req, res) {
    res.contentType('application/json');
    const body = req.body;
    console.log(body);
    const workday = new Workday({'userId': body._userID, 'text': body._text, 'startTime': body._startTime,
        'endTime': body._endTime});
    console.log(workday);

    Workday.create(workday)
        .then(workday => {
            workday.save();
            res.send(workday)
        })
        .catch((error) => {
            res.status(400).json(error);
        });
    });

module.exports = routes;
