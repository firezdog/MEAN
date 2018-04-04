var http    = require('http'),
    fs      = require('fs');

var server = http.createServer(function(req,res) {
    //Page requests
    if (req.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end()
        });
    } else if (req.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    } else if (req.url === '/cars/new') {
        fs.readFile('./views/carform.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }

    //resource requests
    else if(req.url === '/stylesheets/style.css'){
        fs.readFile('stylesheets/style.css', function(errors, contents){
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(contents);
            res.end();
        })
    }
    else if(req.url === '/images/car.jpg'){
        fs.readFile('./images/car.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'img/jpg'});
            res.write(contents);
            res.end();
        })
    }
    else if(req.url === '/images/cat.jpg'){
        fs.readFile('./images/cat.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'img/jpg'});
            res.write(contents);
            res.end();
        })
    }

    //otherwise, serve error page
    else {
        fs.readFile('./views/error.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }
});

server.listen(8000);
console.log("Running at localhost 8000");