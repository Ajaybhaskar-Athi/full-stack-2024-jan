

const fs=require('fs');
fs.readFile("./express/practice/dat.json",(err,data)=>{
  if(err)return console.log("error in reading file");
  const newdata=JSON.parse(data);

  // newdata data: {"name":"ajay","age":20,"marks":"60"}
  console.log(newdata);
 
  newdata["name"]="ankith";

  // after changing {"name":"ankith","age":20,"marks":"60"}
 fs.writeFile('./express/practice/dat.json',JSON.stringify(newdata),'utf8',(err)=>{
  if(err)return console.log("error");
  console.log("data written into the file");
 })

})


const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

const ip = fs.createReadStream("./express/practice/inp.txt");
const op = fs.createWriteStream('./express/practice/inp.txt.gz');

ip.pipe(gzip).pipe(op).on('finish', function() {
    const gunzip = zlib.createGunzip();
    const ipp = fs.createReadStream("./express/practice/inp.txt.gz");
    const opp = fs.createWriteStream('./express/practice/inp.txt');
    ipp.pipe(gunzip).pipe(opp);
});
const ipsize=fs.statSync('./express/practice/inp.txt').size;
const compressedSize=fs.statSync('./express/practice/inp.txt.gz').size;
const decompressedSize=fs.statSync('./express/practice/newinp.txt').size;
console.log("intial size of file: "+ipsize);
console.log("Size after compressing : "+compressedSize);
console.log("size after decompressing the compressed file: "+decompressedSize);
