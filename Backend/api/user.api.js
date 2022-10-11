import express from 'express'
import signup from './../services/user/signup.js';
import signin from './../services/user/signin.js';
import changePass from './../services/user/changePass.js';
import updateAccount from './../services/user/updateAccount.js';
import deleteAccount from './../services/user/deleteAccount.js';
import loggingAuth from './../middleware/authentication/logging.auth.js';
import userValidation from './../middleware/validation/user.validation.js';
const userRouter=express.Router()

userRouter.post('/signup',userValidation,signup)
.post('/signin',signin)
.patch('/',loggingAuth,changePass)
.put('/',loggingAuth,updateAccount)
.delete('/',loggingAuth,deleteAccount)
export default userRouter;