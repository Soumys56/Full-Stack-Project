const express=require('express');
const app=express();
const port=8000;


//use express router.this is a used as a middleware
app.use('/',require('./router'));
//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err)
    {
        console.log(`the erro in running the port: ${err}`);
        return;
    }
    else{
        console.log('the port is running',port);
    }


})