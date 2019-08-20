// Passport - manejo de loggeo y validación de usuarios
// Configuración 
const passport = require('passport');
const app = require('express')()
const User = require('../models/Users')//.default.default
const dotenv = require('dotenv')
dotenv.config()

 console.log(require('../models/Users'))
app.use(passport.initialize());
app.use(passport.session())

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
        callbackURL: "http://localhost:8081/auth/facebook/callback"
        },
        (accessToken, refreshToken, profile, done)=>{
         //Complete with things of postgres, but something like this:
            User.findOne({id:profile.id},(err,user)=>{
                if(err){
                    return done(err)
                }
                if(user){
                    return done(null,user)
                }else{
                    let newUser = new User()
                    newUser.id=profile.id
                    newUser.token= accessToken
                    newUser.name=profile.name.givenName + ' ' + profile.name.familyName
                    newUser.email=profile.emails[0].value

                    newUser.save((err)=>{
                        if(err){
                            throw err;
                        }else{
                            done(null,newUser)
                        }
                    })
                }                
            })

        }
))


//Estrategia Google de Autorización
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:8081/auth/google/callback"
},
     (accesstoken,refreshToken,profile,done)=>{
        User.findOne({id:profile.id},(err,user)=>{
            if(err){
                return done(err)
            }
            if(user){
                return done(null,user)
            }else{
                let newUser = new User()
                newUser.id=profile.id
                newUser.token= accessToken
                newUser.name=profile.name.givenName + ' ' + profile.name.familyName
                newUser.email=profile.emails[0].value

                newUser.save((err)=>{
                    if(err){
                        throw err;
                    }else{
                        done(null,newUser)
                    }
                })
            }                
        })

    })
)