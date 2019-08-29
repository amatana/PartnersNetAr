const express = require('express');
const router = express.Router();
const User = require('../models/Users')


router.post('/crearUsuario', function (req, res) {
    const profile =req.body
    console.log(profile)
    console.log(typeof(profile.interesting))
    User.create({
        id: (Math.random()*10000).toString(),
        email: profile.email,
        username: profile.user,
        linkedIn: profile.linkedin,
        biografy : profile.bio,
        type: profile.type,
        interest: profile.interesting.split(','),
        password: '123456',
    }).then(user => {
        console.log(user)
        if(user.dataValues.type==='TP'){
        res.redirect('/register/proyect')
        }else{
            res.redirect('/profile')
        }
    });
})

router.get('/users',async function (req, res) {
    user = await User.findAll()
    res.json(user)
});

router.post('/proyect', (req,res)=>{
    const profile =req.body
    console.log(profile)
    User.create({
        logros: profile.achievements,        
        nombreProyecto: profile.nameProy,
        tipo: profile.typeProy,
        informacion: profile.infoProy,
        logo: profile.imageProy,
        frase: profile.phraseProy,
        audioPitch : profile.pitchProy,
        losTengo : profile.haveProy,
        losNecesito : profile.needProy,        
        equipo : profile.teamProy,
    }).then(user => {
        res.json(user)
    });
})


module.exports = router