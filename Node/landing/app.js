var http    = require('http'),
    fs      = require('fs');

var server = http.createServer(function(req,res) {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end()
        });
    } else if (req.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    } else if (req.url === '/dojos/new') {
        fs.readFile('form.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }
    else {
        fs.readFile('error.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }
});

server.listen(8000);
console.log("Running at localhost 8000");