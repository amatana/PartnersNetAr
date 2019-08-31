// Passport - manejo de loggeo y validación de usuarios
// Configuración 
const app = require('express')()
const User = require('../models/Users')//.default.default
const dotenv = require('dotenv')
dotenv.config()

module.exports = function (passport){
passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
})


//Estrategia Local de Autorización
const localStrategy = require('passport-local').Strategy
passport.use(new localStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        }
        )
    })
)


//Estrategia Facebook de Autorización
const FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8081/auth/facebook/callback",
        profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
        },
        async (accessToken, refreshToken, profile, done)=>{
            console.log('to search')
            await User.findOne({where:{'id':profile.id}}).then(async(err,user)=>{
                if(err){
                    return done(err)
                }
                if(user){
                    return done(null,user)
                }else{
                    console.log(profile)
                    let newUser = new User()
                    newUser.id=profile.id
                    newUser.token= accessToken
                    newUser.password= newUser.token
                    newUser.name=profile.name.givenName + ' ' + profile.name.familyName
                    newUser.email=profile.emails[0].value

                    await newUser.save()
                    return done(null,newUser)
                }                
            })

        })
    )


//Estrategia Google de Autorización
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:8081/auth/google/callback"
},
     (accessToken,refreshToken,profile,done)=>{
                      
        User.findOne({where:{'id':profile.id}}).then(async(err,user)=>{
            if(err){
                return done(err)
            }
            if(user){
                return done(null,user)
            }else{
                //console.log(profile)
                let newUser = new User()
                newUser.id=profile.id
                newUser.token= accessToken
                newUser.password = newUser.token
                newUser.name=profile.name.givenName + ' ' + profile.name.familyName
                newUser.email=profile.emails[0].value

                await newUser.save()
                return done(null,newUser)
            
                    }
                })
            }                
        ))
}