
// const http=require('http');
// const url=require('url');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     const parsed=url.parse(req.url,true);
//     const path=parsed.pathname;
//     const query=parsed.query;
//     if(path=='/'){
//         res.end('<img src="https://trendytattle.com/wp-content/uploads/2018/02/Samantha-HD-Images-22.jpg" alt="sam">');
//     }
//     else if(path=='/greet'){
//         const name=query.name;
//         res.end(`Hellow ${name}`);

//     }
//     else{
//         res.statusCode=400;
//     }
// }).listen(3000);


// const express=require('express');
// const app=express();
// const path=require('path');
// // app.listen(3000,'127.0.0.1',(req,res)=>{
// //     console.log("server running at http://127.0.0.1:3000/");
// // })
// app.listen(3000);
// app.get('/',(req,res)=>{
//     // res.writeHead(200,{'content-type':'text/html'});
//     res.send("this is root node");
//     res.end();
// })
// app.get('/apple',(req,res)=>{
//     res.send("This is Apple");
// })
// app.get('/:username/:id',(req,res)=>{
//     console.log(req.params);
//     let {username,id}=req.params;
//     let str=`<h2>username=${username} and id=${id}`;
//     res.send(str);
// })

// app.get('/search',(req,res)=>{
//     let {q}=req.query;
//     if(!q){
//         res.send("<h1>Nothing Searched<h1>");

//     }
//     else{
//         res.send(`<h1>search resullts for query: ${q}`);
//     }
// });

// app.get('/:user',(req,res)=>{
//     let {q}=req.query;
//     let{user}=req.params;
//     res.send(`Hai i am ${user} and iam searching for ${q}`);
// });





// const express=require('express');
// const app=express();
// const path=require('path');
// app.set("view engine",'ejs');
// app.set('views',path.join(__dirname,'/views'));
// app.get('/',(req,res)=>{
//     res.render('arr.ejs');
// });

// app.listen(3000);



// Middleware function
// function myMiddleware(req, res, next) {
//     // Perform some operations
//     console.log('Middleware executed');
//     // Call the next middleware in the stack
//     next();
// }

// Apply middleware to all routes
// app.use(myMiddleware);

// Define route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // Start server
// app.listen(3001, () => {
//     console.log('Server is running on port 3000');
// });



const bodyParser = require('body-parser');
const express=require('express');
const app=express();
app.use(bodyParser.json());
app.get('/api/data',(req,res)=>{
    
    const jsonData=req.body;
    res.json({message:'data recievd succesfully'});
});
app.listen(3000);


