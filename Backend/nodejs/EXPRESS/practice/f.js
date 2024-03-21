// const express = require('express');
// const app = express();
// const port = 8080;
// app.listen(port, () => {
//     console.log("sver listening at localhost:8080");
// })
// // app.use((req, res) => {
// //     console.log("request recieved");
// //     // res.send("response is a string ");
// //     // res.send({
// //     //     name: "ajay", age: 20
// //     // })
// //     res.send(["ajay", "ankitha", "pranav", "kushi"]);
// // })
// app.get("/", (req, res) => {
//     res.send("you contacted root path");
// })
// app.get('/apple', (req, res) => {
//     res.send("this is a apple");
// })
// app.use('/', (req, res) => {
//     res.send("this is use method");
// })


// var fs = require('fs');
// var reader=fs.createReadStream('./nodejs/INT222/lecture/inp.txt');
// reader.setEncoding("utf8");
// let data="";
// reader.on("data",(chunk)=>{
//     // data=chunk;
//     console.log(chunk);
// })
// reader.on("end",()=>{
// // if(err)return err;
// console.log(data.toString());
// })

// var fs=require('fs');
// var writer=fs.createWriteStream('./nodejs/INT222/lecture/inp.txt');
// let str="Her name is potti";

// writer.write(str,'utf8');
// writer.end();
// writer.on("finish",()=>{
//     console.log("Succesfuly completed all opNs");
// })




// var reader=fs.createReadStream('./nodejs/INT222/lecture/inp.txt');
// reader.setEncoding('utf8');
// reader.on("data",(chunk)=>{
//     console.log(chunk);
// })
// // reader.on("end",()=>{
// //     console.log("reached to end");
// // })

// const zlib = require('zlib');
// const fs = require('fs');

// // Create a gzip object
// const gzip = zlib.createGzip();

// // Create read and write streams
// const readStream = fs.createReadStream('./nodejs/INT222/lecture/input.txt');
// const writeStream = fs.createWriteStream('output.txt.gz');

// // Pipe the read and write operations
// // This will compress the file content and write it to output.txt.gz
// readStream.pipe(gzip).pipe(writeStream);

//  var fs=require('fs');
//  const zlib=require('zlib');
//  const gzip=zlib.createGzip();
//  const unzip=zlib.createGunzip();
//  const ip=fs.createReadStream('./INT222/lecture/input.txt');
//  const out=fs.createWriteStream('./INT222/lecture/input.txt.gz');
//  ip.pipe(gzip).pipe(out);

// var fs=require('fs');
// const zlib=require('zlib');
// const gzip=zlib.createGzip();
// const unzip=zlib.createGunzip();
// const op=fs.createWriteStream('./INT222/lecture/input.txt');
// const ip=fs.createReadStream('./INT222/lecture/input.txt.gz');
// ip.pipe(gzip).pipe(op);

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('C:/Users/AjayBhaskar Athi/OneDrive/Desktop/full stack/Backend/nodejs/INT222/lecture/buffers.js', (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.end(JSON.stringify(err));
//             return;
//         }
//         res.setHeader('Content-Type', 'application/javascript');
//         res.writeHead(200);
//         res.end(data);
//     });
// }).listen(3000);



// const Twit = require('twit');

// const T = new Twit({
//   consumer_key: process.env.APPLICATION_CONSUMER_KEY_HERE,
//   consumer_secret: process.env.APPLICATION_CONSUMER_SECRET_HERE,
//   access_token: process.env.ACCESS_TOKEN_HERE,
//   access_token_secret: process.env.ACCESS_TOKEN_SECRET_HERE
// });

// // start stream and track tweets
// const stream = T.stream('statuses/filter', { track: '#JavaScript' });

// // use this to log errors from requests
// function responseCallback(err, data, response) {
//   console.log(err);
// }

// // event handler
// stream.on('tweet', tweet => {
//   // retweet
//   T.post('statuses/retweet/:id', { id: tweet.id_str }, responseCallback);
//   // like
//   T.post('favorites/create', { id: tweet.id_str }, responseCallback);
// });


// const express=require('express');
// const fs=require('fs');
// const app=express();
// const bodyParser=require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.useec
//     )

// const express=require('express');
// const app=express();

// app.listen(3000);
// app.get('/index.html',(req,res)=>{
//     res.sendFile(__dirname+"/"+"/index.html");
// })
// app.get('/process',(req,res)=>{
//     response={
//         first_name:req.query.first_name,
//         last_name:req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

// const obj={
//     name:"ajay",roll:22,email:"ajaybhaskar.athi@gmail.com"
// };
// var keys=Object.keys(obj);
// // console.log(obj.keys);
// console.log(keys);
// for(let key of obj){
//     console.log(key);
// }

// let name = 'ajay';
// let rev="";
// for (let i = name.length-1;i>=0;i--){
// rev+=name[i];
// }
// console.log(rev);



// let arr1 = [1, 2, 3, 4];

// let arr2 = [5, 6, 7, 8];

// let merge = [];

// let len = Math.max(arr1.length, arr2.length);

// for (let i = 0; i < len; i++) {
//     if (i < arr1.length) merge.push(arr1[i]);
//     if (i < arr2.length) merge.push(arr2[i]);
// }
// merge.forEach((num)=>{
//     console.log(num);
// })

// const fs = require('fs');

// try{
//     fs.writeFileSync('./EXPRESS/practice/inp.txt',"Hello world",'utf8');

// }
// catch(err){
//     console.log(err);
// }
// fs.readFile('./EXPRESS/practice/inp.txt','utf-8',(err,data)=>{
//     if(err)return console.log("error in opening of file."+err);
//     console.log(data);
// })

// fs.writeFile('./EXPRESS/practice/inp.txt',"HAI HEMANTH",(err)=>{
//     if(err)return console.log("error in opening of file");

// });
// fs.open('./EXPRESS/practice/inp.txt','r',(err,fd)=>{
//     if(err)return console.log("eror in opeing of file");
//     let buffer= Buffer.alloc(1023);

//     fs.read(fd,buffer,0,buffer.length,0,(err,bytes)=>{
//         if(err)return console.log("error in reading file");
//         console.log("bytes read: "+bytes);
//         console.log(buffer.slice(0,bytes).toString());
//     })
// })

// fs.open('./EXPRESS/practice/inp.txt','w',(err,fd)=>{
//     if(err)return console.log("error in opeing of a file.");
//   fs.write(fd,'HEMANTH ZINDABAD','utf-8',(err)=>{
//     if(err)return console.log("error in writng of file");
//     console.log("written succesfully");
//   })
// })

// fs.open('./EXPRESS/practice/inp.txt','r+',(err,fd)=>{
//     if(err)return console.log("error in opening of a file.");
//     let buffer=Buffer.alloc(1024);
//     fs.read(fd,buffer,0,buffer.length,0,(err,bytes)=>{
//         if(err)return console.log("error in reading of a file.");
//         console.log("bytes read: "+bytes);
//         console.log(buffer.slice(0,bytes).toString());
//     })
//     fs.write(fd,"HELLO AP BYE BYE YCP",(err)=>{
//         if(err)return console.log("error in writing of a file.");
//         console.log("written succesfully");
//     })
// })
// fs.open('./EXPRESS/practice/inp.txt','')
// fs.stat('./EXPRESS/practice/inp.txt',(err,status)=>{
// if(err)return console.log("error in opening file");
// console.log(status);
// console.log("is file: "+status.isFile());
// console.log("is Directory:"+status.isDirectory());
// })
// fs.readdir('./EXPRESS/practice',(err,files)=>{
//     if(err)return console.log("error in reading");
//     // console.log(files);
// files.forEach((ele)=>{
//     console.log(ele);
// })
// })
// var fs=require('fs');
// const reader=fs.createReadStream("./EXPRESS/practice/inp.txt",'utf-8');
// let data="";
// reader.on('data',(chunk)=>{
//     data=chunk;
// })
// reader.on('end',()=>{
//     console.log(data);
// })
// reader.on('finish',()=>{
//     console.log("All tasks completed.");
// })
// var fs=require('fs');
// const writer=fs.createWriteStream("./EXPRESS/practice/inp.txt");
// const data="HELLo DArlinG";
// writer.write(data);
// writer.end();
// writer.on('finish',()=>{
//     console.log("wriiten succesflll.");
// })

// let arr=JSON.stringify([1,2,3,4]);

// let buffer=Buffer.from(arr);
// fs.writeFile("./EXPRESS/practice/inp.txt",buffer,'utf-8',(err)=>{
//     if(err)return err;
//     console.log("succes");
// });
// fs.readFile("./EXPRESS/practice/inp.txt",(err,data)=>{
//     if(err)return err;
//     let js=JSON.parse(data);
//     // console.log(data.toString());
//     console.log(js.toString());
// })
// var fs=require('fs');
// let buf=Buffer.alloc(26);
// for(let  i=0;i<buf.length;i++){
// buf[i]=i+97;
// }

// console.log(buf.toString());

// var fs=require('fs');
// const reader=fs.createReadStream("./EXPRESS/practice/inp.txt",'utf-8');
// let data="";
// // let buffer=Buffer.alloc(1024);
// reader.on('data',(chunk)=>{
//     data+=chunk;
// })
// // reader.end();

// reader.on('end',()=>{
//     // console.log(data);
//     let buffer=Buffer.from(JSON.stringify(data));
// console.log(buffer.toString());
// })
// reader.on('finish',()=>{
//     // console.log(data);
// })


// const fs=require("fs");
// var reader=fs.createReadStream("./EXPRESS/practice/inp.txt",'utf-8');
// let data="";
// reader.on("data",(chunk)=>{
//     data+=chunk;

// })
// reader.on("end",()=>{
//     console.log(data);
// })

// const fs=require('fs');
// const data="HAI PAPA ";
// var writer=fs.createWriteStream("./EXPRESS/practice/inp.txt");
// writer.write(data,'utf-8');
// writer.end();
// writer.on('finish',()=>{
//     console.log("succesed");
// })

// const fs=require('fs');
// const zlib=require('zlib');
// const gzip=zlib.createGzip();
// const gunzip=zlib.createGunzip();
// let  ip=fs.createReadStream("./EXPRESS/practice/inp.txt");
// let  op=fs.createWriteStream("./EXPRESS/practice/inpp.txt.gz");

// // gzip.pipe(ip).pipe(op);
// ip.pipe(gzip).pipe(op);

// const fs=require('fs');
// const zlib=require('zlib');
// const gzip=zlib.createGzip();
// const gunzip=zlib.createGunzip();
// const ip=fs.createReadStream("./EXPRESS/practice/inpp.txt.gz");
// const op=fs.createWriteStream("./EXPRESS/practice/inpp.txt");
// ip.pipe(gunzip).pipe(op);


// const http = require('http');
// const server = http.createServer((req, res) => {

//     res.writeHead(402, { 'content-type': 'text/html' });

//     // res.statusCode=402;
//     // res.setHeader('Content-Type', 'text/plain');
//     res.write("Hai Ap");
//     res.end(" The next Bihar");

// })
// server.listen(3001, '127.0.0.1', () => {
//     console.log("server is running at http://127.0.0.1:3001");
// });

// const http = require('http');
// const url = require('url');
// const path = require('path');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     let parsed = url.parse(req.url, true);
//     let file = parsed.pathname;
//     fs.readFile('./EXPRESS/practice/' + file,  (err, data) => {
//         if (err){
//             console.log("error in reading a file.");
//             res.writeHead(404,{'content-type':'text/plain'});
//         }
// res.writeHead(200,{'Content-Type':'text/html'});
// res.write(data.toString());
//         // console.log(data.toString());
//     })
// })
// server.listen(3001, '127.0.0.1');


// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const path = require('path');

// http.createServer((req, res) => {
//     let parsed = url.parse(req.url, true);
//     let path = parsed.pathname;
//     let name= parsed.query.name;
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     // res.write("hello mr." + JSON.stringify(query.name)); // Using JSON.stringify()

// res.write(`hello mr${name}`);
// }).listen(3003);
// const http=require('http');
// const fs=require('fs');
// const url=require('url');
// const path=require('path');
// http.createServer((req,res)=>{
//     let persed=url.parse(req.url,true);
//     let {params}=req.params;
//     // let query=
//     res.writeHead(200,{'Content-Type':'text/plain'});

//     console.log(params);
// }).listen(3003);
// const fs = require('fs');
// const http = require('http');
// const url=require('url');
// const path=require('path');
// http.createServer((req, res) => {
//     let parsed = url.parse(req.url, true);
//     let query=parsed.query;
//     res.writeHead(200,{'Content-Type':'text/html'});
//     // res.write(JSON.stringify(query));
//     let name=JSON.stringify(query.name)
//     res.write("Hai "+name.toString());
//     console.log(query);
// }).listen(3009);
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const path = require('path');
// http.createServer((req, res) => {
//     let parsed = url.parse(req.url, true);
//     let query = parsed.query;
//     res.writeHead(200,{'Content-Type':'text/html'});
//     if(query.name){
//         res.write(`hai u r ${query.name}`);

//     }
//     else if(query.age){
//         res.write(`hai u r ${query.age}`);
//     }
//     else res.write("Default triggered");

// }).listen(4000);

// const express = require('express');
// const app = express();
// app.listen(4300);

// app.get("/", (req, res) => {
//     // let path = path.join(__dirname,"/index.html");
//     res.sendFile('C:/Users/AjayBhaskar Athi/OneDrive/Desktop/full stack/Backend/nodejs/EXPRESS/practice/index.html');
// })

// app.get('/hai', (req, res) => {
//     res.send("System Welcomes You");
// })
// const express = require('express');
// const app = express();
// const path = require('path');
// app.listen(5000);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, "/views"));
// app.get('/:name', (req, res) => {
//     let par = req.params;

//     res.send(`hello ${par.name}`);
// })
// app.get('/hello', (req, res) => {
//     let name = req.query.name;
//     res.send(`hello ${name}`);

// })
// const express = require('express');
// const app = express();
// const path = require('path');

// app.listen(5000);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, "/views"));

// // Route with dynamic parameter
// app.get('/:name', (req, res) => {
//     let name = req.params.name;
//     res.send(`hello ${name}`);
// });

// // Route with query parameter
// app.get('/hello', (req, res) => {
//     let name = req.query.name;
//     res.send(`hello ${name || 'stranger'}`);
// });

// const fs=require('fs');
// fs.readFile('./EXPRESS/practice/dat.json',(errr,data)=>{
//     if(errr)return errr;
//     // console.log(data);
//     const str=JSON.parse(data);
//     // str['name']=ajay;
//     // str[name]='ajay';
//     str['name']="ajay";
    
//     console.log(str);
// fs.writeFile('./EXPRESS/practice/dat.json',JSON.stringify(str),(err)=>{

// });
// })

// const fs=require('fs');
// fs.readFile('./EXPRESS/practice/dat.json',(err,data)=>{
//     const str=JSON.parse(data);
//     console.log(str);
//     str["habit"]="pulihora";
//     console.log(str);
//     fs.writeFile('./EXPRESS/practice/dat.json',JSON.stringify(str),(err)=>{

//     })
// })
// const fs=require('fs');
// let str=[1,2,3,4,5];
// let arr=JSON.stringify(str);
// let buffer=Buffer.from(arr);
// fs.writeFile('./EXPRESS/practice/inp.txt',buffer,'utf-8',(err)=>{

// })
// fs.readFile('./EXPRESS/practice/inp.txt',(err,data)=>{
// console.log(JSON.parse(data).toString());
// })

// const express = require('express');
//  const app = express();
//  app.listen(4300);

//  app.get("/", (req, res) => {
//      // let path = path.join(__dirname,"/index.html");
//      res.sendFile('C:/Users/AjayBhaskar Athi/OneDrive/Desktop/full stack/Backend/nodejs/EXPRESS/practice/index.html');
// })
// const express = require('express');
// const app = express();
// const port = 3000;
// // 
// // app.use
// app.get('/', (req, res) => {
//     // Setting headers before sending the response body
//     res.writeHead(200, {'content-type': 'text/plain'}); 
//     // Sending the response body
//     res.end("Hai received");
// });

// app.listen(port, '127.0.0.1', () => {
//     console.log("server running at http://127.0.0.1:3000/");
// });



// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.write("Hai received");
//     res.end(); // This ends the response
// });
// server.listen(3000);


// const http=require('http');
// http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode=200;
//     res.end("HAi mowa");
// }).listen(3000);


// const http=require('http');
// const url=require('url');
// // const 
// http.createServer((req,res)=>{
//     const parsed=url.parse(req.url,true);
//     const path=parsed.pathname;
//     res.setHeader('content-type','text/html');
//     res.statusCode=200;
//     if(path=='/'){
//         res.write("This is root path");
//         res.end();
//     }
//     else if(path=='/apple'){
//         res.write("Apple konukko mowa 5 rs ley");
//         res.end();
//     }
//     // else if(path='/hai/h'){
//     //     res.write("nested");
//     // }
// }).listen(3000);
// // listen(3000,'127.0.0.1',(req,res)=>{
// //     console.log("server running at http://127.0.0.1:3000/");
// // });


