var express = require('express');
var routes = express.Router();
var request = require('request');

routes.get('/halls', function (req, res, next) {
    request('http://localhost:52070/api/v1/Halls', { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
routes.get('/halls/:id', function (req, res, next) {
    request('http://localhost:52070/api/v1/Halls/' + req.params.id, { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
//Zalen in sporthal ophalen
routes.get('/halls/:id/rooms', function (req, res, next) {
    request('http://localhost:52070/api/v1/Halls/' + req.params.id + '/Rooms', { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
//Openingstijden ophalen
routes.get('/halls/:id/times', function (req, res, next) {
    request('http://localhost:52070/api/v1/Halls/' + req.params.id + '/Times', { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
//faciliteiten van een sporthal ophalen, nog te maken in web api
routes.get('/halls/:id/facilities', function (req, res, next) {
    request('http://localhost:52070/api/v1/Halls/' + req.params.id + '/Facilities', { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
//beschikbare sporten/huurbare objecten van een sporthal, nog te maken in web api
routes.get('/halls/:id/activities', function (req, res, next) {
    request('http://localhost:52070/api/v1/Halls/' + req.params.id + '/Activities', { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
routes.get('/bookings', function (req, res, next) {
    request('http://localhost:52070/api/v1/Bookings', { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});
routes.get('/bookings/:id', function (req, res, next) {
    request('http://localhost:52070/api/v1/Bookings/' + req.params.id, { json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
            next();
        }
    })
});

module.exports = routes;