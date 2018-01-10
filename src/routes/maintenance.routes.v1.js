var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const webUrl = 'http://localhost:3000/api/v1/';

const Maintenance = require('../models/sportsHallMaintenance');

routes.post('/maintenance', function(req, res) {
  const maintenance = new Maintenance({'hallName': req.body.hallName,
    'sportsHallId': req.body.sportsHallId, 'maintenanceType': req.body.maintenanceType,
    'maintenanceObject': req.body.maintenanceObject,
    'endTime': req.body.endTime, 'startTime': req.body.startTime,
    'description': req.body.description});
  console.log(req.body);

  maintenance.save()
    .then((maintenance) => {
      res.status(200).json({message: 'New maintenance created'});
    })
    .catch((error) =>
        console.log(error));
});

module.exports = routes;
