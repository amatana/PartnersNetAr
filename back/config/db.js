const Sequelize = require('sequelize');
// const dotenv = require('dotenv')
dotenv.config()

// const sequelize = new Sequelize('postgres://localhost:salt.db.elephantsql.com/dbpartners', {logging : false})
const sequelize = new Sequelize('postgres://pdkpqwbq:fQUs4kAnOfMjFHR2gkzsDNRNMviJBEDF@salt.db.elephantsql.com:5432/pdkpqwbq')


sequelize.authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;