const S = require('sequelize');
const Model = S.Model;
const crypto = require('crypto');
const sequelize = require('../config/db');

class User extends Model{}
User.init({
    id:{
        type: S.STRING,
        primaryKey:true,
        unique: true
    },
    token:{
        type: S.STRING,
        unique: true
    },
    email: {
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    name:{
        type: S.STRING,
        unique: true
    },
    username:{
        type: S.STRING,
        unique: true
    },
    linkedIn: {
        type: S.STRING
    },
    fullName : {
        type: S.STRING
    },
    perfil:{
        type: S.ENUM('EMP', 'COL', 'ORG')
    },
    salt: {
        type:S.STRING
    },
    password:{
        type: S.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
  },
  {
    hooks:{
        beforeCreate: (user) =>{
            user.salt = crypto.randomBytes(20).toString('hex')
            user.password = user.hashPassword(user.password)
        }
    }
})

//Instance Methods
User.prototype.hashPassword = function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
}
User.prototype.verifyPassword= function(password){
    return this.password === this.hashPassword(password)
}
module.exports = User;