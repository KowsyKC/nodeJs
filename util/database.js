const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'student',
    password: 'nodecomplete'
});

module.exports = pool.promise();