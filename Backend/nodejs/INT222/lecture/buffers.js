// var buffer = new Buffer.alloc(10);
// buffer="hai lpu";
// // var buf = new Buffer.alloc([1, 2, 3, 4]);
// for(var i=0;i<buffer.length;i++){
//     console.log(buffer[i]);
// }
// console.log(buffer);

// var bufStr=new Buffer.from("Namaste Newyork")
// console.log(bufStr.toString());


// var buf = new Buffer.alloc(26);
// for (var i = 0; i < 26; i++) {
//     buf[i] =i+97;
// }
// console.log(buf.toString());




// var fs = require('fs');
// fs.open("./INT222/lecture/inp.txt", 'r', (err, fd) => {
//     if (err) return console.log("error in opening " + err);
//     let buffer = new Buffer.alloc(1024);
//     fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
//         if (err) return console.log("error while reading " + err);
//         console.log("bytes reading from file: " + bytes);
//         if (bytes > 0) {
//             console.log(buffer.slice(0, bytes).toString());
//         }
//     })
// })
// var fs = require('fs');
// fs.open("./INT222/lecture/inp.txt", 'w+', (err, fd) => {
//     if (err) return console.log("error in opening " + err);
//     let buff=Buffer.from("Hello Ap,WElcomee JSP");
//     fs.write(fd,buff,(err)=>{
//         if(err)return console.log("error in writng afile"+err);
//         console.log("written succesuflyy");

//     })

//     let buffer = new Buffer.alloc(1024);
//     fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
//         if (err) return console.log("error while reading " + err);
//         console.log("bytes reading from file: " + bytes);
//         if (bytes > 0) {
//             console.log(buffer.slice(0, bytes).toString());
//         }
//     })
// })


// // /22222222222222222222222222222222222222222222
// var fs = require('fs');
// let buffer=Buffer.from("Hello AP ,Welcome JSP");
// // fs.writeFile('./INT222/lecture/inp.txt',buffer,(err)=>{
// //     if(err) return console.log("error in writing of file "+err);
// //     console.log("written Successfully");
// // })
// let strArr=JSON.stringify([1,2,3,4,5]);
// let buffApnd=Buffer.from(strArr);
// // let buffApnd=Buffer.from([1,2,3,40,50].toString());
// fs.appendFile('./INT222/lecture/inp.txt',buffApnd,(err)=>{
//     if(err) return console.log("error in appending of file "+err);
//     console.log("appended successfully");
// })
// fs.readFile('./INT222/lecture/inp.txt',(err,data)=>{
//     if(err) return console.log("error in reading of file "+err);
//     console.log(data.toString());
// })



// var fs=require('fs');
// let arr=[1,2,3,4,5];
// let strArr=JSON.stringify(arr);
// let buf=Buffer.from(strArr);
// fs.writeFile("./INT222/lecture/inp.txt",buf,(err)=>{
//     if(err) return console.log("error in writng : "+err);
//     console.log("WRitten Succesfully");
// })
// fs.readFile("./INT222/lecture/inp.txt",(err,buffer)=>{
//     if(err)return console.log("error in reaading"+err);
//     // let bufData=JSON.parse(buffer);
//     console.log(buffer);
// })

// var fs=require('fs');
// let buf=Buffer.alloc(26);
// // buf.write("hello world");
// for(var i=0;i<26;i++){
// //  buf.write(i.toString)
// buf[i]=i+97;
// }
// console.log(buf.toString());

// var fs=require('fs');
// let strArr=JSON.stringify([1,2,3,4]);
// // let strArr=
// let buff=Buffer.from(strArr);

// console.log(buff.toString());


// var fs = require('fs');
// fs.open("./nodejs/INT222/lecture/inp.txt", "w+", (err, fd) => {
//     if (err) return console.log("error in opening of file: " + err);
//     let arr = {
//         name: "ajay", age: 20, marks: 55
//     };
//     let strArr = JSON.stringify(arr);

//     let buff = Buffer.from(strArr, 'utf8')
//     fs.write(fd, buff, (err) => {
//         if (err) return console.log("error in writng file: " + err);
//         console.log("writen succesfull");
//     })
//     let bufr = Buffer.alloc(100);
//     fs.read(fd, bufr, 0, bufr.length, 0, (err, bytes) => {
//         if (err) return console.log("error in reading of a file: " + err);
//         console.log(bytes);
//         if(bytes>0){
//             // console.log(bufr.slice(0,bytes).toString());
//         }
//         let data=bufr.slice(0,bytes).toString();
//         console.log(JSON.parse(data));
//     })
// })

var fs = require('fs');
let arr = [1, 2, 3, 4];
let strArr = JSON.stringify(arr);
// let buff=Buffer.alloc(strArr.length);
// buff.write(strArr,'utf8');
// let buff=Buffer.from(strArr,'utf8');
let buff = Buffer.from(arr.toString(), 'utf8');
fs.writeFile("./nodejs/INT222/lecture/inp.txt", buff, (err) => {
    if (err) return console.log("error in writing :" + err);
    console.log("written succesful");
})
fs.readFile("./nodejs/INT222/lecture/inp.txt", 'utf8', (err, data) => {
    if (err) return err;
    // let str=JSON.parse(data);
    console.log(data);
})