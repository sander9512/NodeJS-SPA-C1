var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const webUrl = 'http://localhost:3000/api/v1/';

const ClosingDay = require('../models/sportsHallClosed');

routes.post('/closingday', function(req, res) {
  const closingDay = new ClosingDay({
    'sportsHallId': req.body.sportsHallId,
    'endTime': req.body.endTime, 'startTime': req.body.startTime,
    'description': req.body.description});
  console.log(req.body);

  closingDay.save()
    .then((closingDay) => {
      res.status(200).json({message: 'New closingday created'});
    })
    .catch((error) =>
        console.log(error));
});

module.exports = routes;
