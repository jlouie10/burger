const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
}

// Connect to the MySQL server
connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;