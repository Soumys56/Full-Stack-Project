const express=require('express');

const  router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);

router.use('/users',require('./fbuser'));

//export router  avilable for main index
module.exports=router;
