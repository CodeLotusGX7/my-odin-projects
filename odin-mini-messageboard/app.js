const express = require("express");
const app = express();
const path = require("node:path"); // view engine

// message array
const messages = [
    {
        text: "Hi there!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


//app.get("/", (req, res) => res.send("Hello, friend"));

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {message: "EJS rocks!"});
});