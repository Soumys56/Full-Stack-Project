const express=require('express');
//require cookie pareser for user
const cookieParser=require('cookie-parser');

const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
//import this db 
const db=require('./config/mongoose');
//npm install express-session ..for storing session cookie
const session=require('express-session');
 app.use(express.urlencoded());
 app.use(cookieParser());



//use static file 
app.use(express.static('./assests'));
app.use(expressLayouts);

//extract the style and script from the subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
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