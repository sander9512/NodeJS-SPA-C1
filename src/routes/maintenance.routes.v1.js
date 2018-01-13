var express = require('express');
var routes = express.Router();
var moment = require('moment');
const Maintenance = require('../models/sportsHallMaintenance');

routes.get('/maintenance', function(req, res) {
  res.contentType('application/json');
  Maintenance.find({})
    .then((maintenances) => {
      res.status(200).json(maintenances);
    })
    .catch((error) => res.status(400).json(error));
});
routes.get('/maintenance/:id', function (req, res) {
    Maintenance.find({'sportsHallId': req.params.id})
        .then((maintenances) => {
      res.status(200).json(maintenances);
        })
        .catch((error) => res.status(400).json(error));
});

routes.post('/maintenance/filter/:id', function (req, res) {
    const minDate = new Date(req.body[0]).toISOString();
    const maxDate = new Date(req.body[1]).toISOString();
    console.log(minDate);
    console.log(maxDate);
    Maintenance.find({date: {
        $gte: minDate,
        $lte: maxDate
    }})
        .then((maintenances) => {
      res.status(200).json(maintenances);
        })
        .catch((error) => res.status(400).json(error));
});
routes.post('/maintenance', function(req, res) {
  console.log(req.body);
  let maintenanceObject;
  const maintenanceType = req.body._maintenanceType;
  if(maintenanceType === 'Zaalobject') {
    maintenanceObject = req.body._maintenanceObject.activity.name;
  } else if(maintenanceType === 'Faciliteit') {
    maintenanceObject = req.body._maintenanceObject.facility.name;
  } else {
    maintenanceObject = req.body._maintenanceObject.roomNumber;
  }

  const maintenance = new Maintenance({
    'sportsHallId': req.body._sportsHallId, 'maintenanceType': maintenanceType,
    'maintenanceObject': maintenanceObject,
      'date': req.body._date,
    'endTime': req.body._endTime, 'startTime': req.body._startTime,
    'description': req.body._description});
  console.log('new maint', maintenance);

  maintenance.save()
    .then((maintenance) => {
      res.status(200).json({message: 'New maintenance created'});
    })
    .catch((error) =>
        console.log(error));
});

module.exports = routes;
