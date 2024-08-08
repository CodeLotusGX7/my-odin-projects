// app file

const express = require("express");
const userRouter = require('/Users/codelotus/0-repos-nexus/my-odin-projects/odin-practice-files/first-express-app/routes/userRoutes.js');

const app = express();

// parses form payloads and sets it to the `req,body`
app.use(express.urlendcoded({extended: false}));

// base mount path is `/users` and will always execute on that specific mount path, and yes including `/users/a/b/c`
app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));



// <----- old code below ---->

// routing
//app.get("/", (req, res) => res.send("Hello, Friend!"));

//app.post("/messages", (req, res) => res.send("This is where you can see any messages."));

// Catch all 404
//app.get("*", (req, res) => {
//    res.send("404 page not found/catch all page")
//});

// set the port to be able to come from the environment variable iwht a fallback value
//const PORT = process.env.PORT || 3000;

//app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
