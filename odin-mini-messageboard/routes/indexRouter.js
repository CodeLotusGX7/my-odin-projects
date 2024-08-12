const { Router } = require('express');
const express = require('express');
const indexRouter = Router();

// message data
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

// get view - index
indexRouter.get("/",(req,res) => {
    res.render("index", {title: "Mini Message Board", messages: messages});
    console.log('indexRouter online!');
});

// get view - form - pointer??
indexRouter.get("/new", (req,res) => {
    res.render("form");
});

indexRouter.post("/new",(req,res) => {
    const {authName, authMessage} = req.body;
    messages.push({text: authMessage, user: authName, added: new Date() });
    indexRouter.get(`/${authName}`, (req,res) => {
        res.render("singleUser", {message: messages[messages.length-1]});
    });
    console.log(`Message received: ${authMessage} from: ${authName}`);
    res.redirect("/");
});

messages.forEach((message) => {
    indexRouter.get("/" + message.user, (req,res) => {
        res.render("singleUser", {message: message});
    });
});

module.exports = indexRouter;
