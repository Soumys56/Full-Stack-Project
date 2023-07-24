const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

//use static file 
app.use(express.static('./assests'));
app.use(expressLayouts);

//extract the style and script from the subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


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