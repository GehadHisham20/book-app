import userModel from '../../models/user.model.js';

let changePass=async(request,response)=>{
    const {password}=request.body;
    let result=await userModel.findOneAndUpdate({_id:request.userId},{password})
    if(result){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no user found"});
    }
    
   }
export default changePass;