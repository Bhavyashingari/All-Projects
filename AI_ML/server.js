const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write("Hello there!!")
    res.end("Hello from Node JS web server !")
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});

