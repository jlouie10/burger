const orm = require('../config/orm.js');

let burger = {
    all: (callback) => {
        orm.selectAll('burgers', res => {
            callback(res);
        });
    },
    create: () => {
        orm.insertOne();
    },
    update: () => {
        orm.updateOne();
    }
}

module.exports = burger;