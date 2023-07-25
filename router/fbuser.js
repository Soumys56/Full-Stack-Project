const express=require('express');
const passport=require('passport');

const router=express.Router();

const userController=require('../controllers/user_controller');

router.get('/profile',passport.cheackAuthentication,userController.profile);
router.get('/signup',userController.signUp);
router.get('/signIn',userController.signIn);
router.post('/crete',userController.crete);
//use passport as middleware to authenticate
router.post('/crete-session',passport.authenticate(
    'local',{
        failureRedirect:'/users/signIn'
    }
    
),userController.creteSession);



module.exports=router;