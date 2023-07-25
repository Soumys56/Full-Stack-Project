const { find } = require('../Model/user');
const User = require('../Model/user')
module.exports.profile = async function (req, res) {

  if (req.cookies.user_id) {
    const user = await User.findById(req.cookies.user_id);
    if (user) {
      console.log(user)
      return res.render('profile', {
        user: user

      });

    }


  } else {
    return res.redirect('/users/signIn');

  }

}
module.exports.signUp = function (req, res) {
  return res.render('signup');
}
module.exports.signIn = function (req, res) {
  return res.render('signIn');
}
//get the signUp data

module.exports.crete = async function (req, res) {
  //todo later
  const { email, name, user_name, password } = req.body;



  try {
    const userFound = await User.findOne({ email: email });

    if (!userFound) {
      const user = await User.create(req.body)
      if (user) {
        console.log('user crete sucessfully');
        return res.redirect('/users/signIn');
      }
      else {
        console.log('error in creation a user');
        return res.redirect('/users/signup')
      }
    }
    else {
      return res.redirect('/users/signIn');

    }


  } catch (err) {
    console.log(`Error:${err}`);
  }
}
//get sigIn data

module.exports.creteSession = async function (req, res) {
  //steps to authenticate
  //find user
  const findUser = await User.findOne({ email: req.body.email });

  try {
    //handle user found
    if (findUser) {
      //handle password which don't match
      if (req.body.password == findUser.password) {
        //creating the creation of the session
        res.cookie('user_id', findUser.id);
        return res.redirect('/users/profile');

      }
      else {
        return res.redirect('/users/signIn');

      }

    }
    //handle user not found
    else {
      return res.redirect('/users/signUp');
    }


  }

  catch (err) {
    console.log(err);

  }







}