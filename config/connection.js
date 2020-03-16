//Import sequelize a promise-based Node.js ORM for MySQL
const Sequelize = require('sequelize');

//Import dotenv to load environment variables fron .env file.
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL

    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;
