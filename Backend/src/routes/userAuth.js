const express = require('express');
const authRouter  = express.Router();//create Router

//Register
authRouter.post('/register',register);

//login
authRouter.post('/login',login);
//logout
authRouter.post('/logout',logout);
//getprofile
authRouter.get('/getProfile',getProfile);