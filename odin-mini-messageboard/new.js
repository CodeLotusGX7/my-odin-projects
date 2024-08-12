/* const { Router } = require('express');
const express = require('express');
const router = express.Router();


// point to form
router.get("/form", (req, res) => {

    let form;
    res.render("form", {form});
    console.log(`a request was made to ${form}`);
    res.render("index", { title: "Mini Messageboad", messages: messages});

});

router.post("/new", (req, res) => {
    res.send('POST request to')
    console.log("a post is made to /new");
});

module.exports = router; */
