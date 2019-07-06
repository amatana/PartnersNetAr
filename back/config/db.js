const Sequelize = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('postgres://localhost:' +process.env.PG_PORT + '/dbpartners')

sequelize.authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully.');
  })
  .catch(err => {
    console.error('ACA ME ROMPOUnable to connect to the database:', err);
  });

module.exports = sequelize;