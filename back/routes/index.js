const express = require('express');
const router = express.Router();
const User = require('../models/Users')

router.post('/crearUsuario', function (req, res) {
    User.create({
        email: Math.random() + "@gmail.com",
        password: '123456',
        linkedIn: 'ana-amat'
    }).then(user => {
        res.send(user)
    });
})

router.get('/pregunta', function (req, res) {
    res.send('/respuesta!')
});

module.exports = router