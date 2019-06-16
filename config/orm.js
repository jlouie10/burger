const connection = require('./connection.js');

let orm = {
    selectAll: (table, callback) => {
        let columns = ['burger_id', 'burger_name', 'devoured'];
        let queryString = 'SELECT ?? FROM ??';

        connection.query(queryString, [columns, table], (err, rows) => {
            if (err) throw err;

            callback(rows);
        });
    },
    insertOne: () => {

    },
    updateOne: () => {

    }
};

module.exports = orm;