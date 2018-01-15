var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const webUrl = 'http://localhost:3000/api/v1/';

const ClosingDay = require('../models/sportsHallClosed');

routes.get('/closingday/:id', function(req, res) {
  res.contentType('application/json');
  ClosingDay.find({'sportsHallId': req.params.id})
    .then((closingDays) => {
      res.status(200).json(closingDays);
    })
    .catch((error) => res.status(400).json(error));
});

routes.post('/closingday', function(req, res) {
  let closingDay;
    console.log(req.body);
    if(req.body._allDay === false) {
    closingDay = new ClosingDay({'sportsHallId': req.body._sportsHallId, 'date': req.body._date,
        'startTime': req.body._startTime, 'endTime': req.body._endTime, 'allDay': req.body._allDay, 'description': req.body._description})
  } else if(req.body._allDay === true) {
      closingDay = new ClosingDay({'sportsHallId': req.body._sportsHallId, 'date': req.body._date,
           'allDay': req.body._allDay, 'description': req.body._description})
  }
  console.log(closingDay);

  closingDay.save()
    .then((closingDay) => {
      res.status(200).json({message: 'New closingday created'});
    })
    .catch((error) =>
        console.log(error));
});

module.exports = routes;
