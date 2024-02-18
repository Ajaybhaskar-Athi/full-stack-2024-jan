
// var fs = require('fs');
// var http = require('http');

// http.createServer(function (req, res) {
//     // C:/Users/AjayBhaskar Athi/Desktop/full stack/Backend/nodejs/INT222/lecture/text.txt'
//     fs.readFile('./INT222/lecture/text.txt', function (err, data) {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             return res.end('404 Not Found');
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8087);


// var fs = require('fs');
// var http = require('http');
// http.createServer((req, res) => {
//     console.log("The kerala Story");
//     // res.writeHead(200, { 'Content-Type': 'text/html' });
// res.writeHead(200,{
//     'Content-Type': 'text/css'});
//     req.writeHead(200,{
//         'Content-Type': 'image/jpeg'})
//     res.write("HAi this is Aditya");
//     res.end();

// }).listen(8087);

// var fs = require('fs');
// var http = require('http');
// http.createServer((req, res) => {
//     fs.readFile('./INT222/lecture/inp.txt', (err, data) => {
//         if (err) {
//             res.writeHead(404, { 'Content-type': 'text/html' });
//             return res.end("404 not found");
//         }
//         res.writeHead(200, { 'Content-type': 'text/html' });
//         // res.write(data);
//         return res.end(data);
//     })
// }).listen(8087);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(3000, '127.0.0.123', () => {
//     console.log('Server running at http://127.0.0.123:3000/');
// });


// const http=require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{
//     fs.readFile('./INT222/lecture/inp.txt',(err,data)=>{
//         if(err){
//             res.statusCode=404;
//             res.setHeader('Content-type','text/html');
//             res.end("404 not found");
//         }
//         res.statusCode=200;
//         res.setHeader('Content-type','text/plain');
//         res.write(data);
//         res.end();
//     })
// })
// server.listen(3000,'127.0.0.124',()=>{
//     console.log("server running at http://127.0.0.123:3000/");
// });

// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const queryObject = url.parse(req.url, true).query;
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Received params: ' + JSON.stringify(queryObject));
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');


// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const path = url.parse(req.url, true).pathname; // parse the URL path
//     if(path == '/about') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('About page is here');
//     } else if(path == '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Contact page');
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Page not found');
//     }
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');

// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true); // Parse the URL
//     const path = parsedUrl.pathname; // Get the pathname
//     const query = parsedUrl.query; // Get the query parameters as an object

//     if(path == '/about') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('About page. Year: ' + query.year); // Use the year query parameter
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Page not found');
//     }
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');


// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true); // Parse the URL
//     const path = parsedUrl.pathname; // Get the pathname
//     const query = parsedUrl.query; // Get the query parameters as an object

//     if(path == '/greet') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         const name = query.name || 'Guest'; // Use the name query parameter or 'Guest' if it's not provided
//         res.end(`Hello, ${name}!`); // Greet the user
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Page not found');
//     }
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');


const http = require("http");
const fs = require('fs');
const url = require('url');
const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    const query = path.query;
    fs.readFile('./INT222/lecture/' + path, (err, data) => {
        if (err) {
            res.statusCode = 404;

            res.write("error in reeading the file");
            res.end();
        }
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/javascript');
        res.setHeader('Content-Type','text/plain');
        res.write(data);
        res.end();
    })
})
server.listen(3000, '127.0.0.1', () => {
    console.log("server running at http://127.0.0.1:3000");
})