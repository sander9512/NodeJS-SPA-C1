var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const Workday = require('../models/workday');
const webUrl = 'http://localhost:3000/api/v1/';

routes.get('/workday', function(req, res) {
    res.contentType('application/json');
    Workday.find({})
        .then((workdays) => {
            res.status(200).json(workdays);
        })
        .catch((error) => res.status(400).json(error));
});

module.exports = routes;
