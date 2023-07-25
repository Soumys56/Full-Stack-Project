const passport=require('passport');

const LocalStragey=require('passport-local').Strategy;

const User=require('../Model/user');
//authentication using passport
passport.use(new LocalStragey({
    usernameField:'email'
},

async function(email,password,done){
    //find the user and establish  the identity
    const user=await User.findOne({email:email});
    try{
        
        if(user||user.password==password){
           return done(null,user);


        }
        else{
              console.log('Invalid user name /password');
              return done(null,false);
        }

    }catch(err){
        console.log('Error in finding the user------> passport',err);
        done(err)

    }
    


}
));

//serialize the user to decide which key is to be kept int the cookies

passport.serializeUser(function(user,done){
     done(null,user.id);
});


//deserializing the user from the key int the cookies
passport.deserializeUser(async function(id,done){
   const user=await User.findById(id);
    try{
        if(user){
            return(null,user);

        }else{

            return(null,false);

        }

    }catch(err){
        console.log('Error in finding the user------> passport',err);
        done(err);
    }
});

module.exports=passport;