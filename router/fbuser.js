const express=require('express');

const router=express.Router();

const userController=require('../controllers/user_controller');

router.get('/profile',userController.profile);
router.get('/signup',userController.signUp);

router.post('/crete',userController.crete);
module.exports=router;