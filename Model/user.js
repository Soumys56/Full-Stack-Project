const mongoose=require('mongoose');
 const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

 },{
    timestamps:true
 });

 const User=mongoose.model('User',userSchema);
 module.exports=User;