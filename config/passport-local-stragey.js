const passport = require('passport');

const LocalStragey = require('passport-local').Strategy;

const User = require('../Model/user');
//authentication using passport
passport.use(new LocalStragey({
    usernameField: 'email'
},

    async function (email, password, done) {
        //find the user and establish  the identity
        const user = await User.findOne({ email: email });
        try {

            if (user || user.password == password) {
                return done(null, user);


            }
            else {
                console.log('Invalid user name /password');
                return done(null, false);
            }

        } catch (err) {
            console.log('Error in finding the user------> passport', err);
            done(err)

        }



    }
));

//serialize the user to decide which key is to be kept int the cookies

passport.serializeUser(function (user, done) {
    done(null, user.id);
});


//deserializing the user from the key int the cookies
passport.deserializeUser(async function (id, done) {
    const user = await User.findById(id);
    try {
        if (user) {
            return done(null, user);

        } else {

            return done(null, false);

        }

    } catch (err) {
        console.log('Error in finding the user------> passport', err);
        done(err);
    }
});

//check the user is authenticate
passport.cheackAuthentication = async function (req, res, next) {
    //if the user is signIn pass the request to the next function (controller action)
    if (req.isAuthenticated()) {
        return next();
    }
    //if the user is not sigin 
    return res.redirect('/users/signIn');
}
//set AUthenticated user information which is used to rendering the infromation into views

passport.setAuthenticateUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        //req.user contains the current signed in information from the seesion cookie and just sending to the local for the use for views
        res.locals.user = res = req.user;
    }
    next();
}
module.exports = passport;