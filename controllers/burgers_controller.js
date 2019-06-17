const express = require("express");
const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
    let columns = ['burger_id', 'burger_name', 'devoured'];

    burger.all(columns, data => {
        res.json(data);
    });
});

router.post("/api/burgers", (req, res) => {
    let payload = req.body;

    burger.create(payload, result => {
        res.json({
            id: result.insertId,
            data: payload
        });
    });
});

module.exports = router;