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

router.post('/photo', (req,res)=>{
    console.log("body:")
    console.log(req.body)
    console.log("file:")
    console.log(req.files)
res.json({message:'posted'})
})


module.exports = router