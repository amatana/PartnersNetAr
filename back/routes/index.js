const passport = require('passport')
const router = require('express').Router();


//passport Google
router.get('/auth/google',
    passport.authenticate('google',{scope: ['profile','email']})
)

router.get('/auth/google/callback',
    passport.authenticate('google',{failureRedirect:'/'}),
    (req,res)=>{
        res.redirect('/profile')
    }    
)

//passport Facebook
router.get('/auth/facebook',passport.authenticate('facebook',{scope:['email']}))

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {successRedirect:'/api/users',
                                            failureRedirect: '/'})
)

module.exports = router