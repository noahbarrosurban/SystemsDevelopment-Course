const Sequelize = require('sequelize');

const database = new Sequelize('React', 'sa', 'YourStrongPassw0rd', {
    dialect: 'mssql', 
    host: 'localhost', 
    port: 1433
});

database.sync();

module.exports = database;