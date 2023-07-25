const User = require('../Model/user')
module.exports.profile = function (req, res) {
  return res.render('profile');
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
  const userFound = await User.findOne({ email: email });


  try {

    if (!userFound) {
      const user = await User.create(req.body)
      if (user) {
        console.log('user crete sucessfully');
        return res.redirect('/users/signIn')
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
module.exports.creteSession = async function (req, res) {

  return res.redirect('/users/profile');

}