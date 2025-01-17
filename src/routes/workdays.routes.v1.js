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

routes.get('/workdays/user/:userId', function(req, res) {
  res.contentType('application/json');

 Workday.find({ 'userId': req.params.userId })
 .then((workdays) => {
      res.status(200).json(workdays);
    })
    .catch((error) => res.status(400).json(error));
});
routes.get('/workdays/hall/:hallId', function(req, res) {
    res.contentType('application/json');

    Workday.find({'hallId': req.params.hallId})
        .then((workdays) => {
            res.status(200).json(workdays);
        })
        .catch((error) => res.status(400).json(error));
});

routes.post('/workdays', function(req, res) {
    res.contentType('application/json');
    const body = req.body;
    console.log(body);
    const workday = new Workday({'userId': body._userID, 'hallId': body._hallID, 'text': body._text, 'startTime': body._startTime,
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
routes.delete('/workdays/:id', function (req, res) {
    const id = req.params.id;
    Workday.findByIdAndRemove(id)
        .then(() => {
        res.status(200).json({message: 'Werkdag met id ' + id + ' verwijderd'})
        })
        .catch((error) => {
        res.status(400).json(error);
        })
});

module.exports = routes;
