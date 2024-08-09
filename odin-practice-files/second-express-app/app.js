// app.js
const express = require('express');
//const ejs = require('ejs');
const path = require("node:path");
const app = express();
const port = 8080;
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

// routing
app.get("/", (req, res) => {
    res.render("index", { links: links });
});

app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
});

app.get('/', (req, res) => res.send('Hello World!'));

// ejs - where to look for view files + let app know we entend to use ejs as a template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "EJS Rocks!"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));