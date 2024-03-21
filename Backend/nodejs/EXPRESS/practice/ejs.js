// const express=require('express');
// const app=express();
// const port=8080
// const path=require('path');

// app.listen(port,()=>{
//     console.log("server running at port 8080");
// })
// app.set("view engine",'ejs');
// app.set("views",path.join(__dirname,"/views"));
// app.get("/",(req,res)=>{
//     res.send("THE root directory");
// })
// // app.get("/:fruit",(req,res)=>{
// //     let {fruit}=req.params;
// //     res.render('apple.ejs',{fruit});
// // })
// // app.get('*',(req,res)=>{
// //     res.render("default.ejs");
// // })
// app.get("/array",(req,res)=>{
//     let arr=["hello","ajay","bhaskar"]
//     res.render('arr.ejs',{arr});
// })



const http = require('http');
const url = require('url');
const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.listen(3001, '127.0.0.1', () => {
    console.log("server running at http://127.0.0.1:3000/");
})


app.get('/', (req, res) => {
    res.send("The root path selected");
})
app.get('/orange', (req, res) => {
    res.send("The orange path selected");
})
app.get('/:username', (req, res) => {
    const name = req.params.username;
    res.send(`U selected ${name} url path`);
})
app.get('*', (req, res) => {
    res.status(404).send("Default get triggered");
})
app.post('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`The ${name} is stored in backend by post method`);
})


app.get('/insta', (req, res) => {
    res.render("insta.ejs");
})




const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(202, { 'Content-Type': 'text/plain' });
    if (req.method === "GET") {
        res.end("This is a GET method");
    }
    else if (req.method === 'POST') {
        res.end("This is a POST method");
    }
    else if (req.method === 'PUT') {
        res.end("This is put method");
    }
    else if (req.method === 'DELETE') {
        res.end("this is a DELETE method");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("page not found");
    }
});
server.listen(3000);
