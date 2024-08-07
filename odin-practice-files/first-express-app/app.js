const express = require("express");
const app = express();

// routing
app.get("/", (req, res) => res.send("Hello, Friend!"));

app.post("/messages", (req, res) => res.send("This is where you can see any messages."));

// Catch all 404
app.get("*", (req, res) => {
    res.send("404 page not found/catch all page")
});

// set the port to be able to come from the environment variable iwht a fallback value
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
