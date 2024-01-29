const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mysql',
    password: 'node-sql'
});

module.exports = pool.promise();