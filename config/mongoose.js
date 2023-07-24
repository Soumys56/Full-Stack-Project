const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0/fullstackweb_development');
const db=mongoose.connection;
db.on('error',console.log.bind(console,'Error connecting in MongoDb'));
db.once('open',function(){
    console.log('connected to DataBase :: MongoDb');
});
module.exports=db;
