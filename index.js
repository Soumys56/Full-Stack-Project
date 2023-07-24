const express=require('express');
const app=express();
const port=8000;






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