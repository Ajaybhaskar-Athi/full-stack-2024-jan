// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello World!');
//     res.end();
// }).listen(8098);

var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    var filename = 'inp.txt';
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8000);