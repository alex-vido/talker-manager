const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  password: 'password',
  user: 'root',
  database: 'TalkerDB'
});


module.exports = connection;