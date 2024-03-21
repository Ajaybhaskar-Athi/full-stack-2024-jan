const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname),'/views');
app.listen(3000);

app.use(express.static('public'));
app.use((req,res,next)=>{
    console.log("New a request has been made");
    console.log("Host name: ",req.hostname);
    console.log("path: ",req.path);
    console.log("mathod: ",req.method);
next();

});
app.get('/',(req,res)=>{
    res.render('prac');
});
app.use((req,res,next)=>{
    console.log("In the secoond middleware");
    next();
});

app.get('/about',(req,res)=>{
    res.render('ab');
});

