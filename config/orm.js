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
    updateOne: (table, params, callback) => {
        let queryString = 'UPDATE ?? SET ? WHERE ?';
        let whereParams = {
            burger_id: params.id
        };

        connection.query(queryString, [table, params.data, whereParams], (err, rows) => {
            if (err) throw err;

            callback(rows);
        });
    }
};

module.exports = orm;