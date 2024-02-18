// let num = 123;
// let strNum = num.toString(); // "123"
// console.log(strNum);

// var fs=require('fs');
// fs.writeFileSync("inp.txt","Hello World","utf8");
// fs.readFileSync("inp.txt",(err,data)=>{
//     if(err)return err;
//     console.log(data.toString());
// },"utf8")


// var fs=require('fs');
// fs.writeFile("inp.txt","hello world",(err)=>{
//     if(err)return  err;
//     console.log("FIle Written Succesfully");
// })
// fs.readFile("i.txt",'utf8',(err,data)=>{
//     if(err)return console.error( err);
//     console.log(data);
// })

// var fs = require('fs');
// fs.writeFile('inp.txt',"Hai Papa!",(err)=>{
//     if(err)throw err;
//     console.log("written succesfully");
// })
// fs.writeFileSync('inp.txt','helloWorld');

// const data=fs.readFileSync('inp.txt');
// console.log(data.toString());
// fs.readFile('inp.txt','utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })
// var fs=require('fs');
// fs.open("inp.txt",'r',(err,fd)=>{
//     if(err)throw err;
//     console.log("openend succesfully with file  descriptor :"+fd);
//     // fs.read(fd,)
//     let buffer=new Buffer.alloc(1024);
//     fs.read(fd,buffer,0,buffer.length,0,(err,bytes)=>{
//         if(err)return console.log("error in reading");
//         console.log(`${buffer.slice(0,bytes).toString()}`);
//     })
// })
// fs.open("inp.txt",'w',(err,fd)=>{
//     if(err)return console.log("err in opening");
//     fs.write(fd,"hellowww",(err)=>{
//         if(err)return console.log("err in writing");
//         console.log("written succesfuly");
//     })
// })

// fs.open("inp.txt","r",(err,fd)=>{
//     if(err)return console.log("err in opening");
//     let buffer=new Buffer.alloc(1024);
//     fs.read(fd,buffer,0,buffer.length,2,(err,bytes)=>{
//         console.log(bytes);
//         if(bytes>0){
//             console.log(`${buffer.slice(0,bytes).toString()}`);
//         }
//     })
// })


// fs.open("inp.txt",'w',(err,fd)=>{
//     if(err)return console.log(err);
//     fs.write(fd,"Akshaya",(err)=>{
//         if(err)return console.log("err in oepning");
//         console.log("written Succesfully");
//     })
// })
// fs.open("inp.txt",'r',(err,fd)=>{
//     if(err)return console.log("err in opening a file");
//     var buffer=new Buffer.alloc(1024);
//     fs.read(fd,buffer,0,buffer.length,1,(err,bytes)=>{
//         if(err)return console.log("err in reading");
//         console.log(bytes);
//         if(bytes>0){
//             console.log(buffer.slice(0,bytes).toString());
//         }
//     })
// })
// fs.open("inp.txt","r+",(err,fd)=>{
//     if(err)return console.log("err in opening");
//     fs.write(fd,"ajay",(err)=>{
//         if(err)return console.log("err in writing");
//         console.log("written succesfully");
//     })
//     let buffer =new Buffer.alloc(1024);
//     fs.read(fd,buffer,0,buffer.length,0,(err,bytes)=>{
//         if(err)return console.log("err in reading a file");
//         console.log(bytes);
//         if(bytes>0){
//             console.log(buffer.slice(0,bytes).toString());
//         }
//     })
// })

// fs.open("inp.txt",'a',(err,fd)=>{
//     // fs.appendFile(fd," hai",(err)=>{
//     //     if(err)throw err;
//     // })
//     fs.write(fd," oyy",(err)=>{
//         if(err)return console.log("Err in writing");
//     })
//     // fs.re('inp.txt','utf8',(err,data)=>{
//     //     if(err)return console.log("err in reading");
//     //     console.log(data);
//     // })
// })
// fs.stat("inp.txt",(err,status)=>{
//     if(err)return err;
//     console.log(status);
//     console.log("is file? "+status.isFile());
// })

// fs.mkdir("./nodejs./hai",(err)=>{
//     if(err)return console.log("error"+err);
// })
// fs.readdir('C:/Users/AjayBhaskar Athi/Desktop/full stack/Backend/nodejs/node_modules/lecture',(err,files)=>{
//     if(err)return console.log("error in reading");
//     console.log(files);
// })
// fs.readdir("./node_modules/lecture",(err,file)=>{
//     if(err)return console.log("Eror"+err);
//     file.forEach((ele)=>console.log(ele));
// })
// fs.mkdir("./lecture",(err)=>{
//     if(err)return console.log("error");
// })
// fs.rmdir("./lecture",(err)=>{})

// var fs = require('fs');
// let readStream = fs.createReadStream("inp.txt");
// let data = "";
// readStream.on("data", (chunk) => {
//     console.log("recieved " + chunk.length + " bytes of data");
//     // data += chunk;
//     // console.log(chunk.toString());
// })
// readStream.on("end", (chunk) => {
//     // console.log(data);
//     console.log("data ended");
// })
// var fs = require('fs');
// let data="hello wordl";
// let writeStream =
//     fs.createWriteStream("inp.txt");
// writeStream.write(data, 'utf8');
// writeStream.end();
// writeStream.on("finish",()=>{
//     console.log("writg completed");
// })

// var fs = require('fs');
// let rstream = fs.createReadStream("inp.txt");
// rstream.setEncoding('utf8');
// let data = "";
// rstream.on("data", (chunk) => {
//     data = chunk;
// })
// rstream.on("end", () => {
//     console.log(data);
// })
// rstream.on("finish", (err) => {
//     console.log("completed");
// })
// var fs = require('fs');
// let wstream = fs.createWriteStream("inp.txt");
// wstream.on("finish",()=>{
//     console.log("compoleted");
// })
// wstream.write("hello gajuwaka", 'utf8');
// // wstream.end();
// wstream.end();

const figlet = require('figlet');

figlet('Hemanth', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});



