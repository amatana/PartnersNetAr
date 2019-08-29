const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const Proyect = require('../models/Projects')

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

router.post('/proyect',async (req,res)=>{
    const profile =req.body
    const file = req.files
    console.log(profile)
    console.log(file.pitchProy)
    console.log(file.imageProy)

    const proy = await Proyect.create({
        logros: profile.achievements.split(','),        
        nombreProyecto: profile.nameProy,
        tipo: profile.typeProy,
        informacion: profile.infoProy,
        logo: file.imageProy,
        frase: profile.phraseProy,
        audioPitch : file.pitchProy,
        losTengo : profile.haveProy,
        losNecesito : profile.needProy,        
        equipo : profile.teamProy.split(','),
    })
    
    res.json(proy)
})

router.get('/proy',async function (req, res) {
    proy = await Proyect.findAll()
    res.json(proy)
});

module.exports = router