const express=require('express');
const app=express();
const port=8000;


//use express router.this is a used as a middleware
app.use('/',require('./router'));



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