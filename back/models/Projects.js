//Acá va la definición del modelo de proyectos.
const S = require('sequelize');
const Model = S.Model;
const crypto = require('crypto');
const sequelize = require('../config/db');

class Proyect extends Model{}
Proyect.init({
    // id:{

    // },
    logros:{
        type:S.ARRAY(S.TEXT)
    },
    nombreProyecto:{
        type: S.STRING,
    },
    tipo:{
        type: S.STRING,
    },
    informacion: {
        type: S.STRING
    },
    audioPitch: {
        type: S.JSONB,
        unique: true
    },
    logo:{
        type: S.JSONB,
        unique: true
    },
    frase: {
        type: S.STRING
    },
    losTengo: {
        type:S.STRING
    },
    losNecesito: {
        type:S.STRING
    },
    equipo: {
        type:S.ARRAY(S.TEXT)
    }
}, {
    sequelize,
    modelName: 'Proyect'
  },
  {
    hooks:{
        beforeCreate: (user) =>{
            // user.salt = crypto.randomBytes(20).toString('hex')
            // user.password = user.hashPassword(user.password)
        }
    }
})

//Instance Methods
// Proyect.prototype.hashPassword = function(password){
//     return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
// }
// Proyect.prototype.verifyPassword= function(password){
//     return this.password === this.hashPassword(password)
// }
module.exports = Proyect;