const express = require("express");
const app = express();

const path = require("path");
const hbs = require("hbs");



app.set("view engine", "hbs");


app.get("/", (req, res) => {
    const items = ['items', 'items2', 'items3'];
    res.render('index', { items });
});



app.listen(3000, () => {
    console.log("Port connected");
});
