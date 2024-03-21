const bodyParser = require('body-parser');
const express=require('express');
const app=express();
app.listen(3000);
const path=require('path');
app.set("view engine",'ejs');
// app.set('view engine','')
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    res.render('sampleform');
})
app.post('/saveData',(req,res)=>{
    console.log(req.body.email);
    res.send("email recievd succesfully");
})

// app.use(bodyParser.json());
app.post('/api/data',(req,res)=>{
    console.log('Recieved JSON Data:',req.body);
    res.json({message:'data recievd succesully'});

});
//if we use method=get in html file then we use queries 
// app.get('/saveData',(req,res)=>{
//     console.log(req.query.email);
//     res.send("email recievd succesfully");
// })