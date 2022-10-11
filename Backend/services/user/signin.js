import userModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

let signin=async(request,response)=>{
    const {email,password}=request.body;
    const isFound= await userModel.findOne({email})
    if(isFound){
        const match=await bcrypt.compare(password,isFound.password)
        if(match){
            let token=jwt.sign({userId:isFound._id,isAdmin:isFound.isAdmin},'mytoken')
            response.json({message:"success",token})
        }
        else
            response.json({message:"incorrect password"})
    }
    else
        response.json({message:"email doesn't exist"})
    
   }
export default signin;