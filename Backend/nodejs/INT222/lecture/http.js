
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


// const http = require("http");
// const fs = require('fs');
// const url = require('url');
// const server = http.createServer((req, res) => {
//     const path = url.parse(req.url).pathname;
//     const query = path.query;
//     fs.readFile('./INT222/lecture/' + path, (err, data) => {
//         if (err) {
//             res.statusCode = 404;

//             res.write("error in reeading the file");
//             res.end();
//         }
//         res.statusCode = 200;
//         // res.setHeader('Content-Type', 'application/javascript');
//         res.setHeader('Content-Type','text/plain');
//         res.write(data);
//         res.end();
//     })
// })
// server.listen(3000, '127.0.0.1', () => {
//     console.log("server running at http://127.0.0.1:3000");
// })

// var http = require('http');

// // Create a server object
// http.createServer(function (req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('Hello World!'); // Write a response to the client
//     res.end(); // End the response
// }).listen(8080); // The server object listens on port 8080


// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const queryObject = url.parse(req.url, true).query;
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Received params: ' + JSON.stringify(queryObject));
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');

// const fs=require('fs');
// http.createServer((req,res)=>{
//     const parsed=url.parse(req.url,true);
//     const path=parsed.pathname;
//     const query=parsed.query;
//     // const fil=path
//     fs.readFile("./INT222/lecture/"+path,(err,data)=>{
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             res.write("error in accesing");
//             res.end();
//             return;
//         }
//         res.write(data);
//         res.end();
//     })
// }).listen(8000);



// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/chat', (req, res) => {
//   const message = req.body.message;

//   // Process the message and generate a response
//   const response = processMessage(message);

//   res.json({ response });
// });

// function processMessage(message) {
//   // Basic example: Echo back the received message
//   return `You said: "${message}"`;
// }

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

// const fs = require('fs');
// const url = require('url');
// const http = require('http');

// const server = http.createServer((req, res) => {
//   const parsed = url.parse(req.url, true);
//   const path = parsed.pathname;

//   fs.readFile("./INT222/lecture" + path, 'utf-8', (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end("Error reading file");
//       return;
//     }

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(data);
//   });
// });

// server.listen(3000, '127.0.0.1',() => {
//   console.log('Server is running on port 3000');
// });

// server.listen(3000,'127.0.0.1',()=>{
//   console.log("Server running at http://127.0.0.1:3000/");
// })


// const url=require('url');
// const fs=require('fs');
// const http=require('http');
// const server=http.createServer((req,res)=>{
//   const query=url.parse(req.url,true).query;
//   res.write(query);
// }).listen(3000);


// const express = require('express');
// const fs = require('fs');
// const http = require('http');

// const app = express();
// app.use((req,res)=>{
//   console.log("request recieved");
//   res.send("This is a string");
// })

// app.use((req,res)=>{
//   console.log("request recieved");
// });

// const port = 3000;
// const express = require('express');
// const fs = require('fs');
// const http = require('http');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());

// // Parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(port, '127.0.0.1', () => {

//   console.log("server is running at http://127.0.0.1:3000/");
// })
// app.get('/', (req, res) => {
//   res.send("u contacted root path");
// })
// app.get('/apple', (req, res) => {
//   res.send("u contacted apple");
// })
// app.get('/object', (req, res) => {
//   res.send({
//     name: "ajay", age: 20
//   });
// })

// app.post('/orange', (req, res) => {
//   res.send({
//     name: 'ajay', age: 20
//   });

//   console.log(req.body);
// })





// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // Parse JSON bodies
// app.use(bodyParser.json());

// // Example route that receives POST data
// app.post('/orange', (req, res) => {
//   console.log(req.body); // Access the parsed body data
//   // res.send({
//   //   name: 'ajay',
//   //   age: 20
//   // });
//   res.send("Hello AP Bye Bye YCP");
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



const exp = require('express');
const app = exp();
// const bodyparser = require('body-parser');
app.listen(3000, () => {
  console.log("server is running at localhost:3000");
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.post("/orange", (req, res) => {
  console.log(req.body);
  res.send("Hello orange");
})
// app.post('*',(req,res)=>{
//     res
// })


// const fs=require('fs');
// fs.readFile("./express/practice/dat.json",(err,data)=>{
//   if(err)return err;
//   const parsedData=JSON.parse(data);
//   console.log(parsedData);
// parsedData['place']="Vizag";
// fs.writeFile("./express/practice/dat.json",JSON.stringify(parsedData),'utf8',(err)=>{
//   if(err)return err;
//   console.log("wriiten succes");
// })
// })
const zlib=require('zlib');
const fs=require('fs');
const gzip=zlib.createGzip();
const gunzip=zlib.createGunzip();
const 