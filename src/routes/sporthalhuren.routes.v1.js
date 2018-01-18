var express = require('express');
var routes = express.Router();
var request = require('request');
//Pas deze webUrl aan aan jouw lokale port
const webUrl = 'http://localhost:50719/api/v1/';

routes.get('/halls', function (req, res) {
    request(webUrl + 'Halls', { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
routes.get('/halls/:id', function (req, res) {
    request(webUrl + 'Halls/' + req.params.id, { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
//Zalen van specifieke proprietor ophalen
routes.get('/halls/proprietor/:id', function (req, res) {
    request(webUrl + 'Halls/Proprietor/' + req.params.id, { json: true }, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body)
        }
    })
})
//Zalen in sporthal ophalen
routes.get('/halls/:id/rooms', function (req, res) {
    request(webUrl + 'Halls/' + req.params.id + '/Rooms', { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
//Openingstijden ophalen
routes.get('/halls/:id/times', function (req, res) {
    request(webUrl + 'Halls/' + req.params.id + '/Times', { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
//Openingstijden wijzigen
routes.put('/times/:id', function (req, res) {
    const time = {'TimeOpen': req.body._timeOpen, 'TimeClose': req.body._timeClose };
    request({url: webUrl + 'OpeningTimes/' + req.params.id, method: 'PUT', json: time}, (err, body) => {
        console.log('body', time);
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body);
        }
    })
});
//faciliteiten van een sporthal ophalen, nog te maken in web api
routes.get('/halls/:id/facilities', function (req, res) {
    request(webUrl + 'Halls/' + req.params.id + '/Facilities', { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
//beschikbare sporten/huurbare objecten van een sporthal, nog te maken in web api
routes.get('/halls/:id/activities', function (req, res) {
    request(webUrl + 'Halls/' + req.params.id + '/Activities', { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
routes.get('/bookings', function (req, res) {
    request(webUrl + 'Bookings', { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
routes.get('/bookings/:id', function (req, res) {
    request(webUrl + 'Bookings/' + req.params.id, { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })
});
routes.get('/bookings/hall/:id', function (req, res) {
    request(webUrl + 'Bookings/Hall/' + req.params.id, { json: true}, (err, body) => {
        if(err) {
            return console.log(err);
        } else {
            res.status(200).json(body.body);
        }
    })

});
routes.get('/proprietors', function (req, res) {
    request(webUrl + 'Proprietors', { json: true}, (err, body) => {
        if(err) {
            return console.log(err)
        } else {
            res.status(200).json(body.body);
        }
    })
});

module.exports = routes;
