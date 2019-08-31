const passport = require('passport')
const router = require('express').Router();


//passport Google
router.get('/auth/google',
    passport.authenticate('google',{scope: ['profile','email']})
)

router.get('/auth/google/callback',
    passport.authenticate('google',{failureRedirect:'/'}),
    (req,res)=>{
        req.session.username = req.user.name
        req.session.email = req.user.email
        console.log(req.session)
        console.log('saved and redirecting')
        //console.log(req.session)
        res.redirect('/register')
    }    
)

//passport Facebook
router.get('/auth/facebook',passport.authenticate('facebook',{scope:['user_photos','user_location','user_age_range','email']}))

router.get('/auth/facebook/callback',()=>{
    console.log(req.session)
    passport.authenticate('facebook', {successRedirect:'/register',
                                            failureRedirect: '/'})
})

module.exports = router