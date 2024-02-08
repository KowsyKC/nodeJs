const mysql = require('mysql2');
const { promisify } = require('util');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodecomplete',
  password: '123456',
});

const queryAsync = promisify(db.query).bind(db);

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = {
  db,
  queryAsync,
};

//module.exports= db.promise();
