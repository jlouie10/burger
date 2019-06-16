const express = require('express');
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});