// dec
//const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/404', (req, res) => res.send('Page Not Found'))
app.get('/about', (req, res) => res.send('About Page'))
app.get('/contact', (req, res) => res.send('Contact Me'))


// routing
app.get("/", (req, res) => res.send("Hello, Friend!"));

// set the port to be able to come from the environment variable iwht a fallback value
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
