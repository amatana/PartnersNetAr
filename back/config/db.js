const Sequelize = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('postgres://localhost:' +process.env.PG_PORT + '/dbpartners', {logging : false})

sequelize.authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;