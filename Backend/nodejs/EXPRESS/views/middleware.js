const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname));
app.listen(3000);

//Middlewares executed 

app.use((req,res,next)=>{
    console.log('new request made');
    console.log("Host Name:",req.hostname);
    console.log("method: ",req.method);
    console.log("path:",req.path);
next();
});




app.get('/',(req,res)=>{
    const blogs=[
        {title:'Breakfast ', snippet:'My breakfast is idly'},
        {title:'Lunch' ,snippet:'My lunch is RIce with Dal'},
        {
            title:'Dinner',snippet:'My Dinner is Chapathi woith potato cuury'
        }
    ]
    res.render('index',{title:'Home',blogs});
 
})

app.use((req,res,next)=>{
    console.log('in next middleware');
next();
});



app.get('/about',(req,res)=>{

    // res.sendFile('/about.html',{root:path.join(__dirname)});
    // res.sendFile('/about.html',{root:path.join(__dirname)});
    res.render('about',{title:'About'});
})
app.get('/blogs/create',(req,res)=>{
res.render('create',{title:'create'});
})

// });
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})