const orm = require('../config/orm.js');

let burger = {
    table: 'burgers',
    all: (columns, callback) => {
        orm.selectAll(burger.table, columns, res => {
            callback(res);
        });
    },
    create: (payload, callback) => {
        orm.insertOne(burger.table, payload, res => {
            callback(res);
        });
    },
    update: (payload, callback) => {
        orm.updateOne(burger.table, payload, res => {
            callback(res);
        });
    }
}

module.exports = burger;