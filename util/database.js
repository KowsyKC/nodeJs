const mysql= require('mysql2');

const pool= mysql.createPool({
    host:'localhost',
    database: 'mysql',
    password: 'nodecomplete'
});

module.exports= pool.promise();