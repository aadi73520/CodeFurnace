const express = require('express');
const authRouter  = express.Router();//create Router
const {register,login,logout,adminRegister} = require('../controllers/userAuthent');

const userMiddleware = require('../middleware/userMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

//Register
authRouter.post('/register',register);//controllers -> userAuthent.js

//login
authRouter.post('/login',login);
//logout
authRouter.post('/logout',userMiddleware,logout);

authRouter.post('/admin/register',adminMiddleware,adminRegister);//admin hi as a admin kisi ko admin bana sakta hn
// authRouter.post('/admin/register',userMiddleware,adminRegister);//userMiddleware alreay result mn role store hn

//getprofile
authRouter.get('/getProfile',getProfile);

module.exports = authRouter;