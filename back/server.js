const express = require('express');
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const db = require('./config/db');
const routesIndex = require('./routes');
const multer = require('multer')

dotenv.config()

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
    
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(multer({
    storage,
    dest: 'public/uploads',
    fileFilter:(req,file,cb)=>{
        const filetypes = /jpeg|jpg|png|gif|aac|aif|flac|iff|m4a|m4b|mid|midi|mp3|mpa|mpc|oga|ogg|ra|ram|snd|wav|wma/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))
        console.log({'ext':path.extname(file.originalname), 'mime':file.mimetype})
        if(mimetype && extname){
            return cb(null,true)
        }else if(file.mimetype=='audio/mp4'){
            return cb(null,true)
        }else{
            cb("Error: Archivo debe ser un archivo valido. Verifique la extension")
        }
    }
}).fields([{name:"imageProy",maxCount:1},{name:"pitchProy",maxCount:1}]))

app.use('/api', routesIndex) //puerta de entrada a la api


//Passport - manejo de loggeo y validación de usuarios
//Configuración 
// const passport = require('passport');
// const User = require('./models/Users').default.default

// app.use(passport.initialize());
// app.use(passport.session())

// passport.serializeUser(function (user, done) {
//     done(null, user.id)
// })

// passport.deserializeUser(function (id, done) {
//     User.findByPk(id)
//         .then(user => done(null, user))
// })


// //Estrategia Local de Autorización
// const localStrategy = require('passport-local').Strategy
// passport.use(new localStrategy(
//     function (username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password)) { return done(null, false); }
//             return done(null, user);
//         }
//         )
//     })
// )

//Manejo de Sesiones en el navegador con Express y Sequelize 

// const session = require('express-session')
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sessionStore = new SequelizeStore({ db })
// app.use(session({
//     secret: 'keyboard cat',
//     store: new SequelizeStore({
//       db: sequelize
//     }),
//     resave: false, 
//     proxy: true 
//   }))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, ('./public/index.html')))
})



//PARA EL INICIO DE SESIONES CUANDO SE LEVANTA EL SERVIDOR
// sessionStore.sync()
//     .then(() => {
//         db.sync({ force: false }).then((con) => {
//             app.listen(process.env.PORT, () => console.log('Server is listening on port: ' + process.env.PORT))
//         })
//     });

//One step behind
db.sync({ force: false })
    .then(() => {
        app.listen(process.env.PORT, () => console.log('Server is listening on port: ' + process.env.PORT))
    })