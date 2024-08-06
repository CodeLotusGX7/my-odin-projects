// dec
const http = require('http');

const server = http.createServer( (req, res) => {
    // routing
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Friend');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Page');
    } else if (req.url === '/contact-me') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contant Me');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
    
}).listen(8080);

server.listen(port, () => {
    console.log('Server listening on port ${port}');
});
