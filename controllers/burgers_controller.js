const express = require("express");
const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
    burger.all(data => {
        res.json(data);
    });
});

module.exports = router;