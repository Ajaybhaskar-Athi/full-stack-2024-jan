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

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('C:/Users/AjayBhaskar Athi/OneDrive/Desktop/full stack/Backend/nodejs/INT222/lecture/buffers.js', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.setHeader('Content-Type', 'application/javascript');
        res.writeHead(200);
        res.end(data);
    });
}).listen(3000);

