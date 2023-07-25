const express=require('express');

const router=express.Router();

const userController=require('../controllers/user_controller');

router.get('/profile',userController.profile);
router.get('/signup',userController.signUp);
router.get('/signIn',userController.signIn);
router.post('/crete',userController.crete);
router.post('/crete-session',userController.creteSession);
module.exports=router;