import userModel from '../../models/user.model.js';

let updateAccount=async(request,response)=>{
    const {username,email,age,phone}=request.body;
    let result=await userModel.findOneAndUpdate({_id:request.userId},{username,email,age,phone})
    if(result){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no user found"});
    }
    
   }
export default updateAccount;