var express = require('express');
var routes = express.Router();
var request = require('request');
var User = require('../models/user');
var jwt = require('jwt-simple');
var auth = require('../auth/authentication');
var bcrypt = require('bcryptjs');

const webUrl = 'http://localhost:3000/api/v1/';

// registreer een user
routes.post('/register', function(req, res) {
    let user;
    if(req.body._role === 'Personeel') {
        user = new User({'email': req.body._email, 'name': req.body._name, 'password': req.body._password, 'role': req.body._role, 'hallID': req.body._hallID});
    } else if(req.body._role === 'Verhuurder') {
        user = new User({'email': req.body._email, 'name': req.body._name, 'password': req.body._password, 'role': req.body._role, 'propID': req.body._propID});
    }
    console.log(user);

  user.save()
    .then((user) => {
      res.status(200).json({message: 'User with email ' + user.email + ' created'});
    })
    .catch((error) =>
        console.log(error));
});

routes.post('/login', function (req, res) {
    console.log(req.body);
    User.findOne({'email': req.body._email})
        .then((user) => {
        if(!user) {
            console.log(user);
            res.status(400).json({message: 'No user found with this email/password combination'});
        }
        else if(bcrypt.compareSync(req.body._password, user.password)) {
            console.log(user);
            const token = auth.encodeToken(req.body._email);
            res.status(200).json({user: user, token: token});
        } else {
            console.log(user);
            res.status(400).json({message: 'No user found with this email/password combination'});
        }
        })
});

module.exports = routes;
