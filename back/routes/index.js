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

//Pensar e investigar qué convienve para recibir el pitch y la foto
router.post('/photo',(req,res)=>{
    console.log(req.files)
res.json({message:'posted',file:req.files})
})

module.exports = router