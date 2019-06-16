const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// Connect to the MySQL server
connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;