const express = require('express');
const path = require("node:path");

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

// ejs - where to look for view files + let app know we entend to use ejs as a template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "EJS Rocks!"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));