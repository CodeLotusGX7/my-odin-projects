//require('dotenv').config();

const express = require("express");
const app = express();
const path = require("node:path"); // view engine
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;
// USE ------------------------------------------->

// used to parse form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// using view router
app.use("/", indexRouter);


// SET ------------------------------------------->

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// listening ------------------------------------------->

// keep at the bottom!!
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
