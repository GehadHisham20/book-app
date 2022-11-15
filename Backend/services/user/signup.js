
import userModel from './../../models/user.model.js';
import bcrypt from 'bcrypt'


let signup=async(request,response)=>{
 const {username,email,password,age,phone,isAdmin}=request.body;
 const isFound= await userModel.findOne({email})
 if(isFound){
    response.json({message:"email already exists"})
 }
 else{
    bcrypt.hash(password,process.env.ROUND,(error,hashPass)=>{
        if(error)
        response.json({message:"error in hashed password",error})
        else{
            userModel.insertMany({username,email,password:hashPass,age,phone,isAdmin})
            .then(()=>response.json({message:"success"}))
            .catch((error)=>response.json({message:"error in database",error}))
        }
        
    })
 }

}
export default signup;