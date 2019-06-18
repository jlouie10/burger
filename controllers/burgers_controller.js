const express = require("express");
const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
    let columns = ['burger_id', 'burger_name', 'devoured'];

    burger.all(columns, burgers => {
        res.render("index", { burgers });
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

router.put("/api/burgers/:id", (req, res) => {
    let payload = {
        id: req.params.id,
        data: req.body
    };

    burger.update(payload, result => {
        res.json(payload);
    });
});

module.exports = router;