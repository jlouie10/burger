const connection = require('./connection.js');

let orm = {
    selectAll: (table, columns, callback) => {
        let queryString = 'SELECT ?? FROM ??';

        connection.query(queryString, [columns, table], (err, rows) => {
            if (err) throw err;

            callback(rows);
        });
    },
    insertOne: (table, params, callback) => {
        let queryString = 'INSERT INTO ?? SET ?';

        connection.query(queryString, [table, params], (err, rows) => {
            if (err) throw err;

            callback(rows);
        });
    },
    updateOne: () => {

    }
};

module.exports = orm;